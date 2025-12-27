-- Script SQL pour créer la table contacts dans Supabase
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase

CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT DEFAULT '',
  message TEXT NOT NULL,
  date TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Créer un index sur l'email pour améliorer les performances de recherche
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Optionnel : Activer Row Level Security (RLS) pour la sécurité
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent (pour éviter les conflits)
DROP POLICY IF EXISTS "Allow public insert" ON contacts;
DROP POLICY IF EXISTS "Allow public read" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated read" ON contacts;

-- Politique pour permettre l'insertion de nouveaux contacts pour le rôle anon (clé publishable)
-- IMPORTANT: Cette politique doit permettre l'insertion pour le rôle 'anon' (utilisé par les clés publishable)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Politique pour permettre la lecture publique (nécessaire pour les requêtes SELECT)
-- Si vous voulez restreindre la lecture, remplacez par la politique authentifiée ci-dessous
CREATE POLICY "Allow public read" ON contacts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Alternative : Politique pour permettre la lecture uniquement aux utilisateurs authentifiés
-- Décommentez cette ligne et commentez la politique "Allow public read" ci-dessus si vous voulez restreindre la lecture
-- CREATE POLICY "Allow authenticated read" ON contacts
--   FOR SELECT
--   USING (auth.role() = 'authenticated');

