import bookiImg from "../images/site-booki-webp.webp";
import sophieBluelImg from "../images/sophie-bluel-webp.webp";
import menuMakerImg from "../images/menu-maker-webp.webp";
import ninaImg from "../images/nina-webp.webp";
import kasaImg from "../images/kasa-webp.webp";
import grimoireImg from "../images/grimoire-webp.webp";
import rodleImg from "../images/rodle.png";

const projectsData = [
  {
    id: "7",
    title: "Rodle game",
    img: rodleImg,
    text: "Réalisation d'un site qui propose un mini jeu journalier de devinette avec pour thème le vieux MMORPG Ragnarok online.",
    link: "https://rodle-game.vercel.app/",
    github: "",
  },
  {
    id: "6",
    title: "Mon vieux grimoire",
    img: grimoireImg,
    text: 'Création du Backend du site "Mon vieux grimoires" qui permet l\'ajout, la suppression, la modification et la notation de livre. Utilisation de node.js, Express et MongoDB.',
    link: "",
    github: "",
  },
  {
    id: "5",
    title: "Kasa",
    img: kasaImg,
    text: "Réalisation d'un site web de location immobilière. Le site est développé en utilisant les technologies React, React Router et Sass",
    link: "",
    github: "",
  },
  {
    id: "4",
    title: "Nina Carducci",
    img: ninaImg,
    text: "Optimisation des performances du site à l'aide des outils Lightouse et Wave, optimisation des images (conversion en format WEBP et redimensionnement). Optimisation du référencement à l'aide des balises meta et utilisation de Schema.org",
    link: "",
    github: "",
  },
  {
    id: "3",
    title: "Menu Maker by Qwenta",
    img: menuMakerImg,
    text: "Préparation, planification et organisation du projet de développement d'un site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement, en quelques clics. Utilisation de la méthode Kanban",
    link: "",
    github: "",
  },
  {
    id: "2",
    title: "Sophie Bluel",
    img: sophieBluelImg,
    text: "Réalisation du front-end du site portfolio d'une d'architecte d'intérieur. Le but est de créer une page web dynamique avec du Javascript. Création d'une modale pour permettre à l'utilisateur d'ajouter ou de supprimer des images dans la galerie d'images.",
    link: "",
    github: "",
  },
  {
    id: "1",
    title: "Booki",
    img: bookiImg,
    text: "Réalisation du front-end d'un site d'agence de voyage nommé Booki avec du code HTML et CSS. Le site est responsive au format tablette et mobile.",
    link: "https://ichivin.github.io/Projet-Booki-K.BLONDIAU/",
    github: "",
  },
];

export default projectsData;
