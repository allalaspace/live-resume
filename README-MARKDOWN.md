# Guide d'utilisation des fichiers Markdown pour les posts

## Structure des fichiers Markdown

Les fichiers markdown doivent être stockés dans le bucket Supabase Storage `posts-content` et référencés dans la colonne `markdown_file` de la table `posts`.

## Format du nom de fichier

Il est recommandé d'utiliser un format descriptif :
- `post-angular-17-introduction.md`
- `pwa-avec-angular.md`
- `{post-id}.md` (si vous utilisez l'UUID du post)

## Structure recommandée d'un article

```markdown
# Titre principal de l'article

Une introduction accrocheuse qui résume l'article.

## Section 1

Contenu de la première section...

### Sous-section

Détails supplémentaires...

## Section 2

Autre section avec du contenu...

## Conclusion

Résumé et points clés à retenir.
```

## Éléments Markdown supportés

### Titres
```markdown
# Titre H1
## Titre H2
### Titre H3
```

### Formatage de texte
```markdown
**gras** ou __gras__
*italique* ou _italique_
`code inline`
```

### Listes
```markdown
- Item 1
- Item 2
  - Sous-item
  - Sous-item

1. Premier
2. Deuxième
3. Troisième
```

### Code blocks
````markdown
```typescript
const example = "code block";
```
````

### Citations
```markdown
> Ceci est une citation
> sur plusieurs lignes
```

### Liens
```markdown
[Texte du lien](https://example.com)
```

### Images
```markdown
![Alt text](https://example.com/image.jpg)
```

### Tableaux
```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Donnée 1  | Donnée 2  |
```

### Ligne horizontale
```markdown
---
```

## Exemples de fichiers

Consultez les fichiers d'exemple :
- `example-post.md` - Exemple en anglais
- `example-post-fr.md` - Exemple en français

## Upload vers Supabase Storage

1. Connectez-vous à votre projet Supabase
2. Allez dans **Storage** > **Buckets** > **posts-content**
3. Cliquez sur **Upload file**
4. Sélectionnez votre fichier `.md`
5. Copiez le nom du fichier
6. Mettez à jour la colonne `markdown_file` dans la table `posts` avec ce nom

## Exemple SQL pour lier un fichier à un post

```sql
UPDATE posts 
SET markdown_file = 'mon-article.md' 
WHERE id = 'uuid-du-post';
```

## Bonnes pratiques

1. **Longueur** : Articles de 500-2000 mots pour un bon référencement
2. **Structure** : Utilisez des titres clairs et hiérarchiques
3. **Code** : Utilisez des blocs de code avec syntax highlighting
4. **Images** : Optimisez les images avant de les inclure
5. **Liens** : Ajoutez des liens vers des ressources pertinentes

## Support des langues

Si vous avez plusieurs langues, vous pouvez :
- Créer un fichier par langue : `article-fr.md`, `article-en.md`
- Ou inclure toutes les langues dans un seul fichier avec des sections



