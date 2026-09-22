# Halyd's Secret — Site vitrine

Site vitrine de l'institut de beauté et de la marque de cosmétiques
**Halyd's Secret**. Construit avec Next.js, Tailwind CSS et Framer Motion,
prêt à être déployé sur Vercel.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## Modifier le contenu du site

Tout le texte modifiable (coordonnées, réseaux sociaux, services,
produits, témoignages, horaires...) se trouve dans un seul fichier :

```
lib/site-config.ts
```

Pas besoin de toucher au code des composants pour changer un texte, un
prix ou un lien.

**À compléter en priorité** dans `lib/site-config.ts` :
- `phone` — numéro de téléphone
- `whatsapp` — lien WhatsApp (`https://wa.me/...`)
- `email` — adresse email de contact
- `address` — adresse de l'institut
- `hours` — horaires d'ouverture

Le logo se trouve dans `public/logo.jpg`. Pour le remplacer, glissez un
nouveau fichier au même endroit avec le même nom.

## Structure des sections

Chaque section de la page (`app/page.tsx`) est un composant dans
`components/` : `Hero`, `Services`, `Boutique`, `About`, `Gallery`,
`Testimonials`, `Contact`, `Footer`. Vous pouvez réorganiser, masquer ou
dupliquer une section directement dans `app/page.tsx`.

La section **Galerie** utilise pour l'instant des vignettes de couleur en
attendant vos vraies photos. Le plus simple : ajoutez vos images dans
`public/gallery/` puis remplacez les blocs `motion.a` du composant
`components/Gallery.tsx` par des `<Image src="/gallery/....jpg" .../>`.

La section **À propos** ouvre la vidéo de présentation de la fondatrice
directement depuis Instagram (lien dans `founderReel`, fichier
`lib/site-config.ts`).

## Déploiement sur Vercel

1. Poussez ce dépôt sur GitHub (déjà fait si vous lisez ceci depuis la
   branche de travail).
2. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project**
   et importez ce dépôt GitHub.
3. Vercel détecte automatiquement Next.js — aucune configuration
   supplémentaire n'est nécessaire.
4. Cliquez sur **Deploy**. Le site sera en ligne en quelques minutes sur
   une URL `*.vercel.app`, avant de brancher votre propre nom de domaine
   depuis les réglages du projet Vercel.

## Stack technique

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide](https://lucide.dev) pour les icônes
