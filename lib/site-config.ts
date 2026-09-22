// Contenu central du site — modifiez les textes ici, pas besoin de toucher aux composants.

export const site = {
  name: "Halyd's Secret",
  tagline: "Salon de beauté et académie",
  description:
    "Halyd's Secret : perruques lace wigs, coiffure, maquillage, onglerie, produits d'entretien lace et formation professionnelle.",
  url: "https://halyd-secret.vercel.app",
  phone: "+237 698 53 20 02",
  whatsapp: "https://wa.me/237698532002",
  // TODO: remplacez par votre vraie adresse email
  email: "contact@halydsecret.com",
  address: "Ancienne pharmacie Kotto, Bonamoussadi",
  // TODO: confirmez les horaires exacts
  hours: [
    { day: "Lundi — Vendredi", time: "09h00 — 19h00" },
    { day: "Samedi", time: "09h00 — 20h00" },
    { day: "Dimanche", time: "Sur rendez-vous" },
  ],
};

export const socials = {
  instagram: "https://www.instagram.com/halyd_secret",
  facebook: "https://web.facebook.com/profile.php?id=100069190351810",
  threads: "https://www.threads.com/@halyd_secret",
};

export const founderReel = "https://www.instagram.com/reel/DKwzbAnoeXQ/";

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Boutique", href: "#boutique" },
  { label: "À propos", href: "#about" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Perruques & Lace Wigs",
    desc: "Vente et location de perruques, pose et personnalisation sur-mesure.",
    icon: "Sparkles",
  },
  {
    title: "Coiffure Femme",
    desc: "Coupe, coloration et coiffage haute précision, pensés pour votre personnalité.",
    icon: "Scissors",
  },
  {
    title: "Maquillage",
    desc: "Maquillage jour, soirée ou mariage, sublimé par nos produits maison.",
    icon: "Brush",
  },
  {
    title: "Manucure & Pédicure",
    desc: "Nail art, gel et finitions impeccables, du naturel à l'audacieux.",
    icon: "Hand",
  },
  {
    title: "Produits pose frontale",
    desc: "Vente de cheveux et produits d'entretien pour lace front d'exception.",
    icon: "SprayCan",
  },
  {
    title: "Académie & Formation",
    desc: "Formation professionnelle en coiffure, maquillage et pose de perruques.",
    icon: "GraduationCap",
  },
];

export const products = [
  {
    name: "Dyed Mousse",
    tag: "Entretien lace",
    desc: "Mousse teintée pour lace, action immédiate et longue tenue. Existe en 4 teintes.",
    price: "6 500 FCFA",
  },
  {
    name: "Lace Tint Spray",
    tag: "Entretien lace",
    desc: "Spray teinté pour tulle, change la couleur de la lace pour matcher votre peau.",
    price: "6 000 FCFA",
  },
  {
    name: "Melting Spray",
    tag: "Styling",
    desc: "Fond la lace sans colle, pour une pose nette et une tenue renforcée.",
  },
  {
    name: "Hair Wax Stick",
    tag: "Styling",
    desc: "Stick coiffant pour discipliner les baby hairs et fixer les finitions.",
  },
];

// Ajoutez vos photos dans public/gallery/ puis référencez-les ici.
export const galleryImages = [
  { src: "/gallery/perruque-1.jpg", label: "Lace Wig", span: "sm:row-span-2" },
  { src: "/gallery/coiffure-1.jpg", label: "Coiffure" },
  { src: "/gallery/maquillage-1.jpg", label: "Maquillage" },
  { src: "/gallery/perruque-2.jpg", label: "Perruque", span: "sm:row-span-2" },
  { src: "/gallery/perruque-3.jpg", label: "Perruque" },
];

export const testimonials = [
  {
    name: "Aïcha M.",
    text: "Un accueil chaleureux et un résultat à la hauteur de mes attentes. Je ressors toujours transformée.",
  },
  {
    name: "Grace T.",
    text: "Les produits Halyd's Secret ont changé ma routine beauté. Une équipe passionnée et professionnelle.",
  },
  {
    name: "Sandra K.",
    text: "L'endroit parfait pour prendre soin de soi. Le souci du détail se ressent partout.",
  },
];
