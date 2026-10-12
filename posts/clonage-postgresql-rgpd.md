# Cloner PostgreSQL pour la recette, sans emporter la production

Une plateforme d'assurance a besoin d'environnements de recette réalistes : affiliations, contrats, échéanciers, pièces jointes. Copier la production telle quelle règle le réalisme et crée un autre problème. La recette se remplit de données personnelles, souvent avec les mêmes secrets de chiffrement que la prod.

Le besoin est plus précis : une base structurellement identique, des volumes crédibles, des données qui ne permettent plus d'identifier une personne, et un chiffrement propre à l'environnement cible.

## Trois étapes, pas un `pg_dump` unique

Un dump complet suivi d'un restore copie le schéma, les données et, si l'on n'y prend pas garde, le sens des données. Le clonage utile sépare les trois travaux.

1. **La structure**, via `pg_dump --schema-only`. Tables, index, contraintes, fonctions. Pas une ligne métier.
2. **Les données**, lues puis réécrites par un ETL .NET (EF Core), table par table, dans un ordre compatible avec les clés étrangères.
3. **La protection**, appliquée pendant la copie : déchiffrement avec la clé source, anonymisation, rechiffrement avec la clé de l'environnement cible.

La structure peut être rejouée souvent. Les données ne partent jamais en clair sur le disque de la recette.

## Pourquoi ne pas anonymiser après coup

Anonymiser dans la base déjà restaurée laisse une fenêtre où la prod est présente en recette. Un backup intermédiaire, un log SQL, un export d'un développeur, et la donnée est sortie. L'anonymisation doit avoir lieu dans le flux, avant l'écriture cible.

```text
prod  --lecture-->  déchiffrement AES (clé prod)
                         |
                    anonymisation (Bogus)
                         |
                  rechiffrement AES (clé recette)
                         |
                    écriture cible
```

Bogus fournit des noms, adresses, e-mails et téléphones vraisemblables, stables si on fixe la graine par clé métier. Deux runs sur la même personne produisent le même pseudonyme. Les jointures de test restent reproductibles, sans conserver l'identité.

Les colonnes qui ne sont pas personnelles (codes produit, barèmes, référentiels) sont copiées telles quelles. Tout n'a pas vocation à devenir du bruit : un jeu de recette inutilisable ne sert à personne.

## Ce qu'il faut décider avant d'écrire la première ligne

| Sujet | Décision |
| --- | --- |
| Clés étrangères | Copier les parents avant les enfants, ou désactiver les contraintes le temps du chargement puis les réactiver |
| Identifiants | Conserver les clés techniques pour que les jeux de tests restent stables |
| Chiffrement | Une clé par environnement, jamais la clé de prod en recette |
| Volumes | Un sous-ensemble cohérent (un portefeuille, une période) plutôt qu'un clone intégral systématique |
| Idempotence | Relancer le job ne doit pas dupliquer les lignes : upsert sur la clé métier |

Le sous-ensemble cohérent est le point le plus souvent négligé. Extraire « les 10 000 derniers contrats » sans leurs adhérents, garanties et échéances produit une base qui démarre et qui ment.

## Rendre le job observable

Un ETL de clonage qui échoue à la table 40 sur 70, sans dire laquelle, est relancé en entier. Le minimum utile :

- un log structuré par table : lues, écrites, rejetées, durée ;
- un marqueur de reprise, pour repartir après la dernière table commise ;
- une alerte si le volume écrit s'écarte fortement du volume lu (filtre trop agressif, ou fuite de lignes).

Sur la plateforme, cette supervision rejoint le reste : logs dans Elasticsearch, lecture dans Kibana, métriques de latence (API, RabbitMQ, Redis, PostgreSQL) dans Grafana. Le job de clonage n'est pas un script à part. C'est un traitement de plus, avec les mêmes exigences.

## Ce que la recette a le droit de contenir

À la fin du passage, un contrôle simple vaut mieux qu'une revue manuelle :

- aucune ligne dont l'e-mail ou le NIR correspond à un échantillon connu de la prod ;
- les colonnes chiffrées se déchiffrent avec la clé de recette, et pas avec celle de prod ;
- les comptes de lignes parent / enfant restent cohérents ;
- un scénario métier type (création de contrat, échéancier) passe sur le clone.

Si l'un de ces contrôles échoue, l'environnement n'est pas ouvert aux équipes.

## À retenir

- Séparez le schéma, la copie et la protection. Un seul dump mélange les trois.
- Anonymisez dans le flux, puis rechiffrez avec la clé de l'environnement cible.
- Copiez un sous-ensemble cohérent, pas un extrait arbitraire.
- Rendez le job reprenable et mesurable, comme n'importe quel traitement de production.

La recette devient alors un outil : assez proche de la prod pour trouver les bugs, assez loin des personnes pour pouvoir être manipulée sans devenir un nouveau lieu de stockage de données réelles.

---

*Mohamed Ali Boudiche — ingénieur data et applicatif*
