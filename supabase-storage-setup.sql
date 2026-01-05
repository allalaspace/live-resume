-- Script SQL pour configurer Supabase Storage pour les fichiers markdown des posts
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase

-- Créer le bucket pour stocker les fichiers markdown des posts
-- Note: Cette commande doit être exécutée via l'API Supabase ou l'interface web
-- car les buckets ne peuvent pas être créés directement via SQL

-- Pour créer le bucket via l'interface Supabase :
-- 1. Allez dans Storage > Buckets
-- 2. Cliquez sur "New bucket"
-- 3. Nom: "posts-content"
-- 4. Public: true (pour permettre la lecture publique)
-- 5. File size limit: selon vos besoins (ex: 5MB)
-- 6. Allowed MIME types: text/markdown, text/plain

-- Politique RLS pour permettre la lecture publique des fichiers
-- Cette politique sera créée automatiquement si le bucket est public
-- Sinon, créez-la manuellement dans Storage > Policies

-- Exemple de politique pour lecture publique (si nécessaire) :
-- CREATE POLICY "Allow public read posts content" ON storage.objects
--   FOR SELECT
--   TO anon, authenticated
--   USING (bucket_id = 'posts-content');

-- Instructions pour uploader un fichier markdown :
-- 1. Via l'interface Supabase : Storage > posts-content > Upload file
-- 2. Via l'API : Utilisez le SupabaseStorageService dans l'application
-- 3. Le chemin du fichier doit être stocké dans posts.markdown_file
--    Exemple: "posts-content/post-uuid-123.md"

