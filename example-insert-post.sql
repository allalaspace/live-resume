-- Exemple d'insertion d'un post avec ses internationalisations
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase

-- Étape 1: Insérer le post principal
-- Remplacez les valeurs par vos données réelles
INSERT INTO posts (thumbnail, http, date, order_index) 
VALUES (
  'assets/posts/post-example.jpg',  -- Chemin vers l'image
  'https://example.com/mon-article',  -- URL de l'article (optionnel)
  '12-25-2024',  -- Date au format MM-DD-YYYY
  0  -- Index pour l'ordre d'affichage (0 = le plus récent)
)
RETURNING id;

-- Étape 2: Une fois que vous avez l'ID du post (retourné par la requête ci-dessus),
-- insérez les internationalisations
-- Remplacez 'VOTRE_POST_ID' par l'ID retourné à l'étape 1

-- Exemple avec l'ID retourné (vous pouvez utiliser une variable ou copier l'ID)
-- Pour cet exemple, supposons que l'ID est: 123e4567-e89b-12d3-a456-426614174000

INSERT INTO post_internationalizations (post_id, language, title, description)
VALUES 
  -- Version anglaise
  (
    '123e4567-e89b-12d3-a456-426614174000',  -- Remplacez par l'ID réel
    'en',
    'Example Post Title in English',
    'This is an example description of the post in English. You can write a longer description here that will be displayed in the posts section.'
  ),
  -- Version française
  (
    '123e4567-e89b-12d3-a456-426614174000',  -- Remplacez par l'ID réel
    'fr',
    'Exemple de titre de post en français',
    'Ceci est un exemple de description du post en français. Vous pouvez écrire une description plus longue ici qui sera affichée dans la section des posts.'
  );

-- ============================================
-- ALTERNATIVE: Insertion en une seule transaction
-- ============================================
-- Vous pouvez aussi utiliser une fonction SQL pour tout faire en une fois :

DO $$
DECLARE
  new_post_id UUID;
BEGIN
  -- Insérer le post
  INSERT INTO posts (thumbnail, http, date, order_index) 
  VALUES (
    'assets/posts/post-example-2.jpg',
    'https://example.com/mon-autre-article',
    '12-26-2024',
    1
  )
  RETURNING id INTO new_post_id;

  -- Insérer les internationalisations
  INSERT INTO post_internationalizations (post_id, language, title, description)
  VALUES 
    (new_post_id, 'en', 'Another Example Post', 'This is another example post in English.'),
    (new_post_id, 'fr', 'Un autre exemple de post', 'Ceci est un autre exemple de post en français.');
END $$;

-- ============================================
-- Exemple basé sur vos données existantes
-- ============================================
-- Voici un exemple basé sur le premier post de votre fichier posts.json :

DO $$
DECLARE
  new_post_id UUID;
BEGIN
  -- Insérer le post
  INSERT INTO posts (thumbnail, http, date, order_index) 
  VALUES (
    'assets/posts/post-11-03-2019.jpg',
    '',  -- Pas d'URL dans votre JSON original
    '11-03-2019',
    0
  )
  RETURNING id INTO new_post_id;

  -- Insérer les internationalisations
  INSERT INTO post_internationalizations (post_id, language, title, description)
  VALUES 
    (
      new_post_id, 
      'en', 
      'The anti-traversing 2D .', 
      'Have you ever thought .'
    ),
    (
      new_post_id, 
      'fr', 
      'La formule anti-traversée de tableau 2D.', 
      'Avez-vous déjà pensé à une façon d''éviter de parcourir un tableau 2D?'
    );
END $$;

