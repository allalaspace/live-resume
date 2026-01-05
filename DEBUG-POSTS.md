# Guide de débogage pour les pages de détail des posts

## Vérifications à faire

### 1. Vérifier que le post existe dans la base de données

Exécutez cette requête SQL dans Supabase pour vérifier vos posts :

```sql
SELECT 
  id,
  thumbnail,
  http,
  markdown_file,
  date,
  (SELECT COUNT(*) FROM post_internationalizations WHERE post_id = posts.id) as intl_count
FROM posts
ORDER BY created_at DESC
LIMIT 10;
```

### 2. Vérifier qu'un post a un markdown_file

```sql
SELECT id, markdown_file 
FROM posts 
WHERE markdown_file IS NOT NULL;
```

### 3. Vérifier que le fichier markdown existe dans Supabase Storage

1. Allez dans Supabase > Storage > Buckets > `posts-content`
2. Vérifiez que le fichier référencé dans `markdown_file` existe bien
3. Le nom du fichier doit correspondre exactement (sensible à la casse)

### 4. Tester l'URL

L'URL doit être au format : `/posts/{uuid-du-post}`

Exemple :
- Si votre post a l'ID : `123e4567-e89b-12d3-a456-426614174000`
- L'URL sera : `http://localhost:4200/posts/123e4567-e89b-12d3-a456-426614174000`

### 5. Vérifier la console du navigateur

Ouvrez la console du navigateur (F12) et vérifiez :
- S'il y a des erreurs 404
- S'il y a des erreurs de chargement du service
- Les messages de log du composant PostDetailComponent

### 6. Vérifier que le post a des internationalisations

```sql
SELECT 
  p.id,
  p.markdown_file,
  pi.language,
  pi.title
FROM posts p
LEFT JOIN post_internationalizations pi ON p.id = pi.post_id
WHERE p.id = 'votre-uuid-ici';
```

## Problèmes courants et solutions

### Problème : "Post introuvable"
**Cause** : L'UUID dans l'URL ne correspond à aucun post dans la base de données
**Solution** : Vérifiez que l'ID existe avec la requête SQL ci-dessus

### Problème : "Ce post n'a pas de contenu disponible"
**Cause** : Le post n'a pas de `markdown_file` défini
**Solution** : Mettez à jour le post avec un fichier markdown :
```sql
UPDATE posts 
SET markdown_file = 'nom-du-fichier.md' 
WHERE id = 'uuid-du-post';
```

### Problème : "Impossible de charger le contenu de l'article"
**Cause** : Le fichier markdown n'existe pas dans Supabase Storage
**Solution** : 
1. Vérifiez que le fichier existe dans le bucket `posts-content`
2. Vérifiez que le nom correspond exactement (sensible à la casse)
3. Vérifiez que le bucket est public

### Problème : La route redirige vers /#posts
**Cause** : L'ordre des routes dans app-routing.module.ts
**Solution** : La route `posts/:id` doit être AVANT `posts` (déjà corrigé)

### Problème : Erreur 404
**Cause** : Le composant n'est pas accessible
**Solution** : Vérifiez que PostDetailComponent est bien exporté depuis PostsModule (déjà corrigé)

## Test rapide

1. Récupérez un UUID de post :
```sql
SELECT id FROM posts LIMIT 1;
```

2. Testez l'URL dans votre navigateur :
```
http://localhost:4200/posts/{uuid-recupere}
```

3. Vérifiez la console pour les erreurs

## Exemple de configuration complète

```sql
-- 1. Créer un post de test
INSERT INTO posts (thumbnail, date, markdown_file)
VALUES (
  'https://example.com/image.jpg',
  '12-31-2024',
  'example-post.md'
)
RETURNING id;

-- 2. Ajouter les internationalisations
INSERT INTO post_internationalizations (post_id, language, title, description)
VALUES 
  ('uuid-du-post', 'fr', 'Titre en français', 'Description en français'),
  ('uuid-du-post', 'en', 'Title in English', 'Description in English');

-- 3. Uploader le fichier markdown dans Supabase Storage
-- (via l'interface web : Storage > posts-content > Upload)
```

## Commandes utiles

### Voir tous les posts avec leur statut
```sql
SELECT 
  id,
  CASE 
    WHEN markdown_file IS NOT NULL THEN '✅ Avec markdown'
    WHEN http IS NOT NULL THEN '🔗 Lien externe'
    ELSE '❌ Pas de contenu'
  END as statut,
  markdown_file,
  http
FROM posts;
```



