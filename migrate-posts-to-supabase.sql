-- Script de migration pour importer les posts depuis posts.json vers Supabase
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase
-- Assurez-vous d'avoir exécuté supabase-posts-setup.sql d'abord

-- Note: Vous devrez adapter les valeurs selon vos données réelles
-- Ce script est un exemple basé sur la structure du fichier posts.json

-- Exemple d'insertion d'un post avec ses internationalisations
-- Remplacez les valeurs par vos données réelles

-- Post 1
INSERT INTO posts (thumbnail, http, date, order_index) 
VALUES ('assets/posts/post-11-03-2019.jpg', '', '11-03-2019', 0)
RETURNING id;

-- Ensuite, insérez les internationalisations pour ce post
-- Remplacez 'POST_ID_1' par l'ID retourné par la requête précédente
-- INSERT INTO post_internationalizations (post_id, language, title, description)
-- VALUES 
--   ('POST_ID_1', 'en', 'The anti-traversing 2D .', 'Have you ever thought .'),
--   ('POST_ID_1', 'fr', 'La formule anti-traversée de tableau 2D.', 'Avez-vous déjà pensé à une façon d''éviter de parcourir un tableau 2D?');

-- Répétez pour chaque post...

-- Alternative: Utilisez un script Node.js pour automatiser cette migration
-- Voir migrate-posts-to-supabase.js

