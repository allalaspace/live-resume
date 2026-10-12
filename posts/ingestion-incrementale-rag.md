# Réindexer un RAG sans tout rejouer

Un chatbot d'entreprise adossé à SharePoint n'est utile que si ses réponses restent à jour. Le réflexe, au début, est de tout réingérer à chaque changement : extraire les fichiers, les découper, les vectoriser, puis reconstruire l'index. Ça tient sur un corpus de démonstration. Dès que le volume grandit, le coût et la durée deviennent le vrai sujet.

Ce retour d'expérience décrit un pipeline d'ingestion incrémentale : on ne retraite que ce qui a changé, et chaque réponse reste rattachée à sa source.

## Ce que le pipeline doit faire

Le corpus n'est pas un dossier de PDF propres. C'est un SharePoint : Word, PowerPoint, Excel, HTML, Markdown, et des PDF scannés. Le pipeline enchaîne donc quatre étapes.

1. **Extraire** le texte, avec un OCR (Document Intelligence) quand le fichier n'a pas de couche texte.
2. **Découper** en fragments d'environ 1 000 tokens, avec un recouvrement de 100 tokens pour ne pas couper une phrase au milieu d'une idée.
3. **Vectoriser** chaque fragment et l'indexer dans Azure AI Search, avec les métadonnées de provenance.
4. **Interroger** cet index depuis le modèle, par function calling, et renvoyer la réponse en streaming.

Le point qui change la qualité perçue n'est pas le modèle. C'est la provenance : fichier, page, fragment. Sans ça, une réponse juste reste invérifiable.

## Pourquoi tout réindexer coûte trop cher

Une réindexation complète refait le travail déjà payé.

- L'OCR et l'extraction sont lents sur les PDF scannés.
- Chaque fragment repasse par l'API d'embeddings.
- L'index est réécrit alors que la majorité des documents n'a pas bougé.
- Pendant ce temps, le chatbot répond sur un index soit ancien, soit en cours de reconstruction.

Le bon critère n'est pas « le fichier existe ». C'est « le fichier a changé depuis la dernière ingestion réussie ».

## Un cache d'état, pas un second index

Cosmos DB tient l'état de chaque document, pas son contenu. Une entrée suffit :

```json
{
  "id": "site/bibliotheque/contrat-collectif.pdf",
  "etag": "\"a1b2c3\"",
  "lastModified": "2026-01-12T08:14:00Z",
  "contentHash": "9f2c…",
  "status": "indexed",
  "chunkCount": 42,
  "indexedAt": "2026-01-12T08:21:00Z"
}
```

À chaque passage, le pipeline compare l'état SharePoint à cet enregistrement.

| Situation | Action |
| --- | --- |
| Document inconnu | Extraction, chunking, indexation, puis écriture de l'état |
| `etag` ou hash identique | On passe au suivant |
| Contenu modifié | Suppression des anciens fragments, puis réindexation |
| Document disparu | Suppression des fragments et de l'état |
| Échec en cours de route | `status = failed`, reprise au prochain passage |

Le hash protège du cas où l'etag change sans que le texte change (métadonnées, renommage de colonne). L'etag évite de retélécharger un fichier stable.

## Découper sans perdre la source

Un fragment sans coordonnées est inutile au moment de la citation. Le chunk porte donc sa provenance dès la découpe.

```python
def chunk_document(doc, size=1000, overlap=100):
    chunks = []
    start = 0
    tokens = doc.tokens
    while start < len(tokens):
        end = min(start + size, len(tokens))
        chunks.append({
            "id": f"{doc.id}:{start}",
            "content": detokenize(tokens[start:end]),
            "source": doc.path,
            "page": doc.page_at(start),
            "etag": doc.etag,
        })
        if end == len(tokens):
            break
        start = end - overlap
    return chunks
```

Les identifiants stables (`{document}:{offset}`) permettent de remplacer un fragment sans reconstruire l'index entier. Azure AI Search reçoit un upsert sur ces identifiants, pas un delete-and-recreate du corpus.

## Plusieurs chatbots, un seul pipeline

Une plateforme interne sert rarement un seul assistant. Le même moteur d'ingestion alimente plusieurs chatbots, chacun avec son index et son périmètre documentaire.

Le périmètre est une configuration, pas une branche de code : site SharePoint, bibliothèques, types de fichiers, et index cible. Ajouter un chatbot revient à déclarer un scope, pas à dupliquer le pipeline.

## Ce que le modèle voit

La recherche sémantique n'est pas collée dans le prompt en dur. Elle est exposée comme un outil. Le modèle décide quand chercher, reçoit les fragments, puis répond en citant fichier, page et extrait. Le streaming démarre dès les premiers tokens, sans attendre la fin de la génération.

La citation n'est pas un habillage. C'est le contrat : si le fragment n'est pas dans l'index, la réponse ne doit pas l'inventer.

## À retenir

- Ne réindexez que les documents dont le contenu a changé.
- Gardez l'état (etag, hash, statut) à part du contenu vectorisé.
- Attachez fichier, page et fragment à chaque chunk avant l'indexation.
- Isolez les chatbots par index et par périmètre, pas par copie du pipeline.

Le gain n'est pas seulement une facture d'embeddings plus basse. C'est un index qui suit le SharePoint, et des réponses que l'on peut ouvrir à la page citée.

---

*Mohamed Ali Boudiche — ingénieur data et applicatif*
