// Service Worker pour PWA - Live Resume
const CACHE_NAME = 'live-resume-v1';
const RUNTIME_CACHE = 'live-resume-runtime-v1';

// Fichiers à mettre en cache lors de l'installation
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Cache ouvert');
        // Ajouter les fichiers de base au cache
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' })));
      })
      .catch((error) => {
        console.error('[Service Worker] Erreur lors de la mise en cache:', error);
      })
  );
  // Forcer l'activation immédiate
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[Service Worker] Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Prendre le contrôle de toutes les pages
  return self.clients.claim();
});

// Interception des requêtes (stratégie: Cache First, puis Network)
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  
  // Ignorer les requêtes vers des APIs externes (sauf si nécessaire)
  if (url.origin !== self.location.origin && !url.href.includes('supabase.co')) {
    return;
  }

  // Ne pas mettre en cache les routes dynamiques (posts/:id)
  // Toujours aller chercher ces routes depuis le réseau
  if (url.pathname.startsWith('/posts/') && url.pathname !== '/posts') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          // En cas d'erreur réseau, retourner index.html pour le routing Angular
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
          return fetch(event.request);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si pas en cache, faire une requête réseau
        return fetch(event.request)
          .then((response) => {
            // Vérifier que la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cloner la réponse pour la mettre en cache
            const responseToCache = response.clone();

            // Mettre en cache uniquement les ressources statiques
            // Ne pas mettre en cache les pages HTML dynamiques
            if (event.request.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/) &&
                !event.request.destination === 'document') {
              caches.open(RUNTIME_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // En cas d'erreur réseau, retourner une page offline si disponible
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Gestion des messages depuis l'application
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

