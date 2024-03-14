import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Projects from "../components/Projects";
import booki from "../images/site-booki.PNG";
import grimoire from "../images/grimoire.PNG";
import kasa from "../images/kasa.PNG";
import menu from "../images/menu-maker.PNG";
import nina from "../images/nina.PNG";
import bluel from "../images/sophie-bluel.PNG";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import Modal from "../components/Modal";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Section anchorId="projets" title={"Projets"} number={"01"}>
                    <Projects
                        title={"Booki"}
                        img={booki}
                        text={`Réalisation du front-end d'un site d'agence de voyage nommé Booki avec du code HTML et CSS.
                         Le site est responsive au format tablette et mobile.`}
                    />
                    <Projects
                        title={"Sophie Bluel"}
                        img={bluel}
                        text={`Réalisation du front-end du site portfolio d'une d'architecte d'intérieur.
                        Le but est de créer une page web dynamique avec du Javascript.
                        Création d'une modale pour permettre à l'utilisateur d'ajouter ou de supprimer des images dans la galerie d'images.`}
                    />
                    <Projects
                        title={"Menu Maker by Qwenta"}
                        img={menu}
                        text={`Préparation, planification et organisation du projet de développement d'un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics.
                         Utilisation de la méthode Kanban`}
                    />
                    <Projects
                        title={"Nina Carducci"}
                        img={nina}
                        text={`Optimisation des performances du site à l'aide des outils Lightouse et Wave, optimisation des images (conversion en format WEBP et redimensionnement).
                        Optimisation du référencement à l'aide des balises meta et utilisation de Schema.org`}
                    />
                    <Projects
                        title={"Kasa"}
                        img={kasa}
                        text={`Réalisation d'un site web de location immobilière. Utilisation de React, React Router et Sass`}
                    />
                    <Projects
                        title={"Mon vieux grimoire"}
                        img={grimoire}
                        text={`Création du Backend du site "Mon vieux grimoires" qui permet l'ajout, la suppression, la modification et la notation de livre.`}
                    />
                </Section>
                <Section anchorId="about" title={"À propos"} number={"02"}>
                    <About />
                </Section>
                <Section anchorId="technologies" title={"Technologies"} number={"03"}>
                    <Technologies />
                </Section>
                <Section anchorId="contact" title={"Contact"} number={"04"}>
                    <Contact />
                </Section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
