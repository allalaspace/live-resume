# Créer une Progressive Web App (PWA) avec Angular

Dans cet article, nous allons voir comment transformer une application Angular en Progressive Web App (PWA) installable sur mobile et desktop.

## Qu'est-ce qu'une PWA ?

Une Progressive Web App est une application web qui offre une expérience similaire à une application native. Elle peut être installée sur l'appareil de l'utilisateur et fonctionne même hors ligne.

## Prérequis

- Application Angular existante
- Service HTTPS (requis pour le service worker)
- Manifest.json configuré
- Service Worker implémenté

## Étapes de mise en place

### 1. Créer le manifest.json

Le fichier `manifest.webmanifest` définit comment l'application apparaît lorsqu'elle est installée :

```json
{
  "name": "Mon Application",
  "short_name": "Mon App",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "icons": [
    {
      "src": "/assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### 2. Implémenter le Service Worker

Le service worker permet de :
- Mettre en cache les ressources
- Fonctionner hors ligne
- Améliorer les performances

```javascript
// service-worker.js
const CACHE_NAME = 'my-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

### 3. Enregistrer le Service Worker

Dans votre composant principal :

```typescript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker enregistré');
    });
}
```

## Fonctionnalités PWA

### Installation sur mobile

Sur Android/Chrome :
1. L'utilisateur voit un prompt d'installation
2. Ou peut utiliser le menu "Ajouter à l'écran d'accueil"

Sur iOS/Safari :
1. Utiliser le bouton de partage
2. Sélectionner "Sur l'écran d'écran d'accueil"

### Fonctionnement hors ligne

Grâce au service worker, votre application peut fonctionner même sans connexion internet, en utilisant les ressources mises en cache.

## Bonnes pratiques

1. **Icônes** : Fournissez des icônes de différentes tailles (192x192, 512x512)
2. **Manifest** : Configurez correctement le manifest pour une meilleure expérience
3. **Service Worker** : Mettez à jour le cache régulièrement
4. **HTTPS** : Obligatoire pour le service worker en production

## Avantages des PWA

- ✅ Installation rapide
- ✅ Fonctionnement hors ligne
- ✅ Notifications push (avec permission)
- ✅ Expérience native
- ✅ Pas besoin d'App Store

## Conclusion

Les PWA offrent une excellente alternative aux applications natives, en combinant la flexibilité du web avec les fonctionnalités des apps natives.

---

*Article écrit par Mohamed Ali Boudich - Développeur Full-stack*



