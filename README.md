# Déploiement sur DigitalOcean

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/Latifox/izzabaha.github.io/tree/main)

Ce guide explique comment déployer cette application React sur la plateforme d'applications (App Platform) de DigitalOcean.

## Prérequis

- Un compte [DigitalOcean](https://cloud.digitalocean.com/registrations/new).
- Ce projet poussé sur un dépôt GitHub.

## Étapes de Déploiement

### 1. Créer une Application sur DigitalOcean

1.  Connectez-vous à votre tableau de bord DigitalOcean.
2.  Dans le menu de gauche, cliquez sur **Apps**, puis sur le bouton **Create App**.

### 2. Connecter votre Dépôt GitHub

1.  Choisissez **GitHub** comme source de votre code.
2.  Autorisez DigitalOcean à accéder à vos dépôts GitHub si ce n'est pas déjà fait.
3.  Sélectionnez le dépôt `Latifox/izzabaha.github.io` dans la liste.
4.  Choisissez la branche que vous souhaitez déployer (par exemple, `main`) et cliquez sur **Next**.

### 3. Configurer l'Application

DigitalOcean détectera automatiquement qu'il s'agit d'une application Node.js et proposera une configuration. Assurez-vous que les paramètres suivants sont corrects :

-   **Type** : Static Site
-   **Build Command** : `npm run build`
-   **Output Directory** : `dist` (Vite place les fichiers de build dans le dossier `dist` par défaut).

Si DigitalOcean ne le configure pas comme un site statique, vous pouvez le modifier manuellement. Un site statique est généralement suffisant pour une application React comme celle-ci.

### 4. Lancer l'Application

1.  Choisissez un plan. Le plan **Basic** ou **Starter** est généralement suffisant pour un portfolio.
2.  Cliquez sur **Launch App**.

DigitalOcean va maintenant cloner votre dépôt, construire l'application en utilisant la commande `npm run build`, et la déployer. Le processus peut prendre quelques minutes.

Une fois le déploiement terminé, votre application sera accessible via une URL fournie par DigitalOcean. Vous pouvez également configurer un domaine personnalisé dans les paramètres de l'application.

## Déploiements Automatiques

Par défaut, DigitalOcean configurera un webhook sur votre dépôt GitHub. Chaque fois que vous pousserez de nouvelles modifications sur la branche `main`, DigitalOcean reconstruira et redéploiera automatiquement votre application.
