# Porter une plateforme d'assurance vers un cloud de confiance

Déplacer une plateforme déjà en production n'est pas un exercice de « lift and shift » propre. Le code parle AWS : S3 pour les fichiers, KMS pour le chiffrement, Lambda pour les traitements. La cible, ici S3NS, parle un autre vocabulaire. L'objectif n'est pas de réécrire le métier. C'est de changer le socle sans interrompre le service, et sans coller le nom d'un fournisseur dans chaque cas d'usage.

## Le piège du client cloud dans le métier

Quand `AmazonS3Client` ou un appel KMS est appelé depuis un service d'affiliation ou de contrat, la migration devient un chantier applicatif. Chaque équipe retouche son code, les tests divergent, et le jour du basculement tout doit être vrai en même temps.

L'alternative est un contrat d'accès à la donnée, et deux implémentations choisies par configuration.

```csharp
public interface IObjectStore
{
    Task PutAsync(string key, Stream content, CancellationToken ct);
    Task<Stream> GetAsync(string key, CancellationToken ct);
    Task DeleteAsync(string key, CancellationToken ct);
}
```

`S3ObjectStore` et `GcsObjectStore` implémentent ce contrat. Le service métier dépend de `IObjectStore`. La composition racine lit la configuration et branche l'une ou l'autre. Même appel, deux régions, deux fournisseurs.

Ce découpage sert aussi les tests : un faux store en mémoire suffit pour le métier, les tests d'intégration ciblent une seule implémentation.

## Le chiffrement suit le même mouvement

Les objets ne sont pas seulement déplacés. Ils sont chiffrés par l'application. Porter le stockage sans porter les clés laisse des données illisibles, ou pire, des clés statiques copiées dans le nouveau projet.

Le passage d'AWS KMS vers Cloud KMS reprend le même schéma : une interface de chiffrement, deux implémentations. L'authentification change en même temps. Workload Identity remplace les clés longue durée posées dans la configuration. Le pod prouve son identité au cluster ; le cluster obtient un jeton court pour KMS. Plus de secret à faire tourner dans les variables d'environnement.

## De Lambda vers Kubernetes

Lambda convient à des fonctions courtes, déclenchées par un événement. Une plateforme d'assurance a aussi des traitements plus longs, des appels entre services, et un besoin de voir le trafic. Les déplacer vers Kubernetes change trois choses.

- **Le runtime.** Le conteneur remplace le paquet de déploiement Lambda. L'image est la même en recette et en production.
- **Le réseau.** Les appels qui passaient par des URL publiques ou une DMZ passent par le maillage du cluster. Il faut redéclarer qui a le droit d'appeler qui, au lieu de recopier des security groups.
- **L'observabilité.** Les logs et les métriques sortent du service managé Lambda pour arriver sur la stack du cluster. Sans ça, le dual-run est aveugle.

Le métier, lui, ne change pas de contrat. Seul l'hébergement du processus change.

## Le dual-run, seule façon de comparer

Couper AWS le vendredi soir pour « voir si S3NS tient » n'est pas un plan. Le dual-run garde la production AWS en service et envoie le même flux, ou un flux miroir, vers la cible en région française.

On compare alors des choses mesurables :

| Signal | Question |
| --- | --- |
| Écriture / lecture objet | Le fichier déposé d'un côté se relit-il à l'identique de l'autre ? |
| Chiffrement | Un objet chiffré sur la cible se déchiffre-t-il avec la clé Cloud KMS ? |
| Latence des APIs | Le maillage Kubernetes reste-t-il dans le budget de la prod AWS ? |
| Erreurs métier | Les codes de retour divergent-ils sur les mêmes jeux d'entrée ? |

Tant que ces écarts ne sont pas expliqués, AWS continue de servir le trafic. Le basculement est une décision sur des mesures, pas une date dans un slide.

## Ordre qui évite les impasses

1. Poser les abstractions (stockage, chiffrement) et les couvrir par des tests sur l'implémentation actuelle.
2. Brancher la seconde implémentation derrière un drapeau de configuration.
3. Authentifier la cible par Workload Identity, sans clé statique.
4. Déplacer les traitements vers le cluster et adapter le trafic inter-services.
5. Lancer le dual-run, comparer, puis seulement ensuite envisager la bascule.

## À retenir

- Isolez le fournisseur derrière un contrat. Le métier ne doit pas connaître S3 ni GCS.
- Portez les clés en même temps que les fichiers, et supprimez les secrets statiques.
- Gardez l'ancienne production en service le temps de mesurer la cible.
- Traitez le réseau et l'observabilité comme une partie de la migration, au même titre que le stockage.

Une migration de cloud de confiance réussie se voit peu dans l'interface. Elle se voit dans le fait que le même binaire parle aux deux socles, et que l'on peut revenir en arrière tant que les chiffres ne sont pas là.

---

*Mohamed Ali Boudiche — ingénieur data et applicatif*
