/**
 * Script de migration pour importer les posts depuis posts.json vers Supabase
 * 
 * Usage:
 * 1. Installez les dépendances: npm install @supabase/supabase-js
 * 2. Configurez les variables d'environnement ci-dessous
 * 3. Exécutez: node migrate-posts-to-supabase.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Configuration - Remplacez par vos valeurs
const SUPABASE_URL = 'https://auoiubngdazzhyryvrzk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_e10A1nnnYID8s0JYvz6Z6A_IBkdGDAO'; // Utilisez la clé service_role pour les migrations

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Lire le fichier posts.json
const postsJsonPath = path.join(__dirname, 'src', 'assets', 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(postsJsonPath, 'utf8'));

async function migratePosts() {
  console.log(`Début de la migration de ${posts.length} posts...`);

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    
    try {
      // Insérer le post
      const { data: postData, error: postError } = await supabase
        .from('posts')
        .insert({
          thumbnail: post.thumbnail,
          http: post.http || '',
          date: post.date,
          order_index: posts.length - i - 1 // Ordre inverse pour avoir les plus récents en premier
        })
        .select()
        .single();

      if (postError) {
        console.error(`Erreur lors de l'insertion du post ${i + 1}:`, postError);
        continue;
      }

      console.log(`Post ${i + 1} inséré avec l'ID: ${postData.id}`);

      // Insérer les internationalisations
      if (post.internationalizations && post.internationalizations.length > 0) {
        const internationalizations = post.internationalizations.map(intl => ({
          post_id: postData.id,
          language: intl.language,
          title: intl.title,
          description: intl.description
        }));

        const { error: intlError } = await supabase
          .from('post_internationalizations')
          .insert(internationalizations);

        if (intlError) {
          console.error(`Erreur lors de l'insertion des internationalisations pour le post ${i + 1}:`, intlError);
        } else {
          console.log(`  - ${internationalizations.length} internationalisations insérées`);
        }
      }
    } catch (error) {
      console.error(`Erreur lors de la migration du post ${i + 1}:`, error);
    }
  }

  console.log('Migration terminée!');
}

// Exécuter la migration
migratePosts().catch(console.error);

