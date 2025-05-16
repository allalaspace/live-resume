# Live Resume

Un CV interactif développé avec Angular et disponible en plusieurs langues.

## Fonctionnalités

- CV interactif à page unique
- Support multilingue (français, anglais, portugais)
- Design responsive
- Formulaire de contact

## Prérequis

- Node.js (v14.x ou supérieur recommandé)
- npm (v6.x ou supérieur)

## Installation

1. Cloner le dépôt
   ```
   git clone https://github.com/votre-utilisateur/live-resume.git
   cd live-resume
   ```

2. Installer les dépendances
   ```
   npm install
   ```

## Lancement

Pour démarrer l'application en mode développement :

- Version française :
  ```
  npm run start:fr
  ```

- Version anglaise :
  ```
  npm run start:en
  ```

- Version portugaise :
  ```
  npm run start:pt
  ```

L'application sera accessible à l'adresse [http://localhost:4200](http://localhost:4200).

## Build

Pour créer une version de production :

- Version française :
  ```
  npm run build:fr
  ```

- Version anglaise :
  ```
  npm run build:en
  ```

- Version portugaise :
  ```
  npm run build:pt
  ```

- Toutes les versions :
  ```
  npm run build-locale
  ```

## Déploiement sur GitHub Pages

### Méthode manuelle

Pour déployer l'application sur GitHub Pages, utilisez la commande :

```
npm run deploy:gh-pages
```

Cette commande crée une version optimisée du site et la déploie sur la branche gh-pages.

### Méthode automatique avec GitHub Actions

Ce projet inclut également un workflow GitHub Actions qui déploie automatiquement le site sur GitHub Pages à chaque push sur la branche principale.

Pour activer cette fonctionnalité :
1. Assurez-vous que votre dépôt dispose de GitHub Pages activé dans les paramètres
2. Configurez GitHub Pages pour utiliser la branche "gh-pages"
3. Poussez vos modifications sur la branche principale

Le site sera alors accessible à l'adresse : https://votre-utilisateur.github.io/live-resume/

## Notes sur les mises à jour

Le projet a été mis à jour vers Angular 17. Des modifications ont été apportées pour assurer la compatibilité avec cette version, notamment :

- Mise à jour des dépendances Angular
- Adaptation du service de contact (déconnecté de Firebase pour le moment)
- Correction des problèmes d'importation et de compatibilité

## Technologies

- Angular 17
- TypeScript
- SCSS
- Internationalisation (i18n)
