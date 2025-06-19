# Luna Soulage - Vitrine Digitale

Site vitrine pour les patchs Luna Soulage, une solution naturelle contre les douleurs menstruelles.

## 📋 À faire

### Configuration initiale
- [✅] Initialisation du projet React avec Vite
- [✅] Configuration de Tailwind CSS
- [✅] Création des variables de couleurs et thème dans Tailwind
- [✅] Création des assets (logo, images, etc.)

### Structure et composants
- [✅] Création du layout principal (header, footer)
- [✅] Mise en place du routeur React Router
- [✅] Création des composants communs (boutons, cartes, etc.)

### Pages
- [✅] Page d'accueil (landing page)
  - [✅] Slogan et présentation
  - [✅] Image principale du produit
  - [✅] Bouton de commande WhatsApp
- [✅] Présentation du produit
  - [✅] Images et caractéristiques
  - [✅] Avantages par rapport aux solutions concurrentes
- [✅] Mode d'emploi
  - [✅] Instructions visuelles d'utilisation
- [✅] Témoignages
  - [✅] Affichage des avis clients
- [✅] FAQ et Livraison
  - [✅] Questions fréquentes
  - [✅] Informations de livraison
- [✅] Page contact/commande
  - [✅] Formulaire ou redirection WhatsApp
- [✅] Page mentions légales
- [✅] Page 404 personnalisée

### Fonctionnalités
- [✅] Intégration du bouton WhatsApp avec message prérempli
- [✅] Animation et transitions entre sections (Framer Motion)
- [✅] Responsive design (mobile, tablette, desktop)
- [✅] Bouton "Retour en haut" fonctionnel sur toutes les pages

### Optimisations
- [✅] Chargement différé des images (lazy loading)
- [✅] Optimisation des performances avec React.lazy
- [✅] Animations optimisées pour mobile
- [✅] Accessibilité (attributs ARIA, navigation au clavier)

### Finalisation
- [✅] Tests sur différents appareils
  - [✅] Chargement initial de la page
  - [✅] Rendu des polices et images
  - [✅] Fonctionnalité du bouton "Retour en haut"
- [✅] Optimisation des performances
- [ ] Déploiement sur Vercel
- [ ] Configuration du domaine (si applicable)

## 🏗️ Structure du projet

```
luna_soulage/
├── public/                  # Fichiers statiques (images, favicon, etc.)
├── src/
│   ├── assets/              # Images et ressources
│   ├── components/          # Composants réutilisables
│   │   ├── Footer.jsx       # Pied de page
│   │   ├── Header.jsx       # En-tête avec navigation
│   │   └── ...              # Autres composants
│   ├── pages/               # Pages du site
│   │   ├── HomePage.jsx         # Page d'accueil
│   │   ├── AboutPage.jsx      # Présentation du produit
│   │   ├── ProcedurePage.jsx     # Mode d'emploi
│   │   ├── TestimonialPage.jsx # Témoignages
│   │   ├── FaqPage.jsx          # FAQ et livraison
│   │   └── ...              # Autres pages
│   ├── App.jsx              # Composant principal
│   ├── Router.jsx           # Configuration des routes
│   ├── index.css            # Styles globaux avec Tailwind
│   └── main.jsx             # Point d'entrée
├── index.html               # Template HTML
├── package.json             # Dépendances et scripts
├── tailwind.config.js       # Configuration de Tailwind CSS
└── vite.config.js           # Configuration de Vite
```

## 🚀 Installation et démarrage

1. Cloner le dépôt
```bash
git clone [URL_DU_REPO]
cd luna_soulage
```

2. Installer les dépendances
```bash
npm install
```

3. Démarrer le serveur de développement
```bash
npm run dev
```

4. Construire pour la production
```bash
npm run build
```

5. Prévisualiser la version de production
```bash
npm run preview
```

## 📱 Déploiement

Le site sera déployé sur Vercel.

```bash
# Installation de Vercel CLI (si nécessaire)
npm install -g vercel

# Déploiement
vercel
```
## 📚 Technologies utilisées
- React 19 - Bibliothèque UI pour construire l'interface
- Vite - Bundler et serveur de développement ultra-rapide
- React Router v7 - Navigation entre les pages
- Tailwind CSS v4 - Framework CSS utilitaire
- Framer Motion - Animations et transitions fluides
- React Icons - Icônes pour l'interface utilisateur


## 🧩 Caractéristiques principales
- Design moderne et attrayant adapté à la cible
- Navigation intuitive avec menu responsive
- Animations élégantes pour une expérience utilisateur optimale
- Totalement responsive sur mobile, tablette et desktop
- Optimisé pour les performances (code splitting, lazy loading)
- Appels à l'action clairs pour faciliter les commandes