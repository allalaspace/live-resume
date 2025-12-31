-- Exemple SIMPLE d'insertion d'un post
-- Copiez-collez ce code dans l'éditeur SQL de Supabase et exécutez-le

-- Cette version utilise une transaction pour tout faire en une fois
DO $$
DECLARE
  new_post_id UUID;
BEGIN
  -- 1. Insérer le post principal
  INSERT INTO posts (thumbnail, http, date, order_index) 
  VALUES (
    'assets/posts/mon-nouveau-post.jpg',  -- Chemin de l'image
    'https://mon-site.com/article',        -- URL de l'article (optionnel, peut être vide '')
    '12-27-2024',                         -- Date au format MM-DD-YYYY
    0                                     -- 0 = le plus récent, augmentez pour les plus anciens
  )
  RETURNING id INTO new_post_id;

  -- 2. Insérer les traductions (internationalisations)
  INSERT INTO post_internationalizations (post_id, language, title, description)
  VALUES 
    -- Version anglaise
    (
      new_post_id,
      'en',
      'My New Blog Post Title',
      'This is the description of my new blog post in English. It can be as long as you want.'
    ),
    -- Version française
    (
      new_post_id,
      'fr',
      'Titre de mon nouveau post de blog',
      'Ceci est la description de mon nouveau post de blog en français. Elle peut être aussi longue que vous le souhaitez.'
    );
    -- Vous pouvez ajouter d'autres langues si nécessaire (pt, es, etc.)

  RAISE NOTICE 'Post créé avec l''ID: %', new_post_id;
END $$;

