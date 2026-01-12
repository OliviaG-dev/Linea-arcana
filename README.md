# 🜁 Linea Arcana

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

> **Linea Arcana** révèle votre ligne de vie à travers les arcanes du Tarot de Marseille.

Linea Arcana est une application de tarologie initiatique qui révèle votre ligne de vie à partir de votre prénom, de votre nom et de votre date de naissance. En s'appuyant sur la roue de Pythagore et les 22 arcanes du Tarot de Marseille, elle met en lumière les grandes étapes de votre chemin d'incarnation.

Un outil de lecture symbolique pour mieux comprendre vos cycles, vos choix et votre sens profond.

## ✨ Fonctionnalités

- 🔮 Calcul de votre ligne de vie tarologique à partir de votre prénom, nom et année de naissance
- 📊 Analyse basée sur la roue de Pythagore (numérologie pythagoricienne)
- 🎴 Interprétation des 22 arcanes majeurs du Tarot de Marseille
- 🎯 Affichage de 5 arcanes correspondant aux 5 cycles de vie (personnalité, enfance, passage, réalisations, aboutissement)
- ✨ **Mise en évidence automatique du cycle actuel** - La carte correspondant à votre cycle de vie actuel est automatiquement mise en évidence avec une bordure dorée animée
- 🖼️ Visualisation des cartes avec animations de retournement
- 📖 Modal détaillée avec descriptions complètes des cycles et arcanes
- ✅ Validation complète du formulaire avec messages d'erreur (années acceptées : 1800-2050)
- 🎨 Interface moderne et intuitive avec design mystique
- 📱 Design responsive (mobile, tablette, desktop)
- 🎭 Animations élégantes et transitions fluides

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) ou [yarn](https://yarnpkg.com/)

### Étapes d'installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/linea-arcana.git
cd linea-arcana
```

2. Installez les dépendances :

```bash
npm install
# ou
pnpm install
# ou
yarn install
```

## 💻 Utilisation

### Mode développement

Lancez le serveur de développement :

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:5173`

### Build de production

Créez une version optimisée pour la production :

```bash
npm run build
# ou
pnpm build
# ou
yarn build
```

Les fichiers générés seront dans le dossier `dist/`.

### Prévisualisation de la build

Prévisualisez la build de production :

```bash
npm run preview
# ou
pnpm preview
# ou
yarn preview
```

### Linting

Vérifiez le code avec ESLint :

```bash
npm run lint
# ou
pnpm lint
# ou
yarn lint
```

## 🛠️ Technologies utilisées

- **[React](https://react.dev/)** (v19.2.0) - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Superset typé de JavaScript
- **[React Router DOM](https://reactrouter.com/)** (v7.12.0) - Routage côté client pour React
- **[Vite](https://vitejs.dev/)** (v7.2.4) - Outil de build et serveur de développement ultra-rapide
- **[ESLint](https://eslint.org/)** - Linter pour JavaScript et TypeScript

## 📁 Structure du projet

```
linea-arcana/
├── public/
│   └── arcanes/          # Images des 22 arcanes majeurs + dos de carte
├── src/
│   ├── components/
│   │   └── ArcaneModal/  # Modal pour afficher les détails des arcanes
│   │       ├── ArcaneModal.tsx
│   │       └── ArcaneModal.css
│   ├── data/
│   │   ├── arcaneData.json    # Données descriptives des 22 arcanes
│   │   ├── cycleData.json     # Données des 5 cycles de vie
│   │   └── interface.ts       # Interfaces TypeScript
│   ├── Home/                  # Page d'accueil avec formulaire
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── LifeLine/              # Page de résultats (ligne de vie)
│   │   ├── LifeLine.tsx
│   │   └── LifeLine.css
│   ├── utils/
│   │   └── tarotCalculations.ts  # Logique de calcul pythagoricien
│   ├── App.tsx                # Composant principal avec routing
│   ├── App.css
│   ├── index.css              # Styles globaux et variables CSS
│   └── main.tsx               # Point d'entrée de l'application
├── index.html                 # Template HTML
├── package.json               # Dépendances et scripts
├── tsconfig.json              # Configuration TypeScript
├── vite.config.ts             # Configuration Vite
├── vercel.json                # Configuration Vercel pour le routing SPA
└── eslint.config.js           # Configuration ESLint
```

## 🎯 Méthode

Linea Arcana calcule à partir de quelques données essentielles :

- **Arcane 1** : Votre personnalité incarnée (prénom + nom)
- **Arcane 2** : Votre héritage familial et émotionnel (année de naissance)
- **Arcane 3** : Votre passage vers l'âge adulte (réduction de l'arcane 2)
- **Arcane 4** : Vos réalisations et défis majeurs (arcane 1 + arcane 3)
- **Arcane 5** : Votre arcane d'aboutissement (somme des 4 premiers arcanes)

Chaque arcane correspond à un cycle de vie spécifique avec des plages d'âge définies. L'application calcule automatiquement votre cycle actuel en fonction de votre âge et met en évidence la carte correspondante avec une bordure dorée animée.

Chaque arcane est interprété comme une énergie de vie, non comme une prédiction.

> ⚠️ **Note importante** : Linea Arcana ne prédit pas l'avenir. Elle révèle des archétypes, des cycles récurrents et des axes de conscience. C'est un outil de compréhension, de réflexion et d'alignement.

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la build de production
- `npm run lint` - Exécute ESLint pour vérifier le code

## 🚀 Déploiement

### Vercel

L'application est configurée pour être déployée sur [Vercel](https://vercel.com/). Le fichier `vercel.json` est inclus pour gérer correctement le routing des Single Page Applications (SPA).

**Configuration automatique :**
- Le fichier `vercel.json` redirige toutes les routes vers `index.html`, permettant à React Router de gérer le routage côté client
- Cela évite les erreurs 404 lors du rafraîchissement des pages

**Pour déployer :**
1. Connectez votre repository Git à Vercel
2. Vercel détectera automatiquement la configuration et déploiera l'application
3. Les mises à jour seront automatiquement déployées à chaque push sur la branche principale

## 🤝 Contribution

Ce projet est privé. Pour toute question ou suggestion, veuillez contacter les mainteneurs du projet.

## 📄 Licence

Ce projet est privé et tous droits réservés.

---

**Linea Arcana** — La ligne invisible de votre vie révélée par les arcanes. ✦
