-- Script SQL pour créer les tables posts dans Supabase
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase

-- Table principale pour les posts
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  thumbnail TEXT NOT NULL,
  http TEXT,
  date TEXT NOT NULL, -- Format MM-DD-YYYY
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0 -- Pour ordonner les posts
);

-- Table pour les internationalisations des posts
CREATE TABLE IF NOT EXISTS post_internationalizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  language TEXT NOT NULL, -- 'en', 'fr', 'pt', etc.
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, language) -- Un seul titre/description par langue par post
);

-- Créer un index sur post_id pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_post_internationalizations_post_id ON post_internationalizations(post_id);

-- Créer un index sur la date pour le tri
CREATE INDEX IF NOT EXISTS idx_posts_date ON posts(date);

-- Créer un index sur order_index pour le tri
CREATE INDEX IF NOT EXISTS idx_posts_order_index ON posts(order_index);

-- Activer Row Level Security (RLS)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_internationalizations ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Allow public read posts" ON posts;
DROP POLICY IF EXISTS "Allow public read post_internationalizations" ON post_internationalizations;

-- Politique pour permettre la lecture publique des posts
CREATE POLICY "Allow public read posts" ON posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Politique pour permettre la lecture publique des internationalisations
CREATE POLICY "Allow public read post_internationalizations" ON post_internationalizations
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Optionnel : Politiques pour l'insertion/modification (si vous voulez permettre l'administration)
-- Décommentez si vous voulez permettre l'insertion depuis l'application
-- CREATE POLICY "Allow authenticated insert posts" ON posts
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (true);
--
-- CREATE POLICY "Allow authenticated update posts" ON posts
--   FOR UPDATE
--   TO authenticated
--   USING (true);

