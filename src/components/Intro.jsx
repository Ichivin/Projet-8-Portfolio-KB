import React, { useEffect, useState } from "react";
import "../css/intro.css";
import { TypeAnimation } from "react-type-animation";
import webdev from "../images/webdev.svg";

function Intro() {
    const scrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };
    let dataText = [
        "Kévin Blondiau",
        "Développeur d'application web",
        `Bienvenue sur mon portfolio ! Je suis un développeur web passionné qui se lance dans le monde
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  let dataText = [
    "Kévin Blondiau",
    "Développeur d'application web",
    `Bienvenue sur mon portfolio ! Je suis un développeur web passionné qui se lance dans le monde
>>>>>>> 2732536 (change portfolio to firm)
  excitant de la création web, je suis déterminé à acquérir de l'expérience et à développer mes
  compétences dans ce domaine en constante évolution. Je suis spécialisé dans la création de sites web
  dynamiques et attrayants en utilisant les langages HTML, CSS et JavaScript. Bien que je n'aie pas
  encore d'expérience professionnelle, je suis plein d'enthousiasme et prêt à relever de nouveaux
  défis. Explorez mon portfolio pour découvrir mes projets personnels et mes réalisations en tant que
  développeur en herbe.`,
    ];

    return (
        <section className="intro-section">
            <div className="intro">
                <div className="intro-container">
                    <TypeAnimation
                        sequence={["Kévin Blondiau"]}
                        wrapper="h1"
                        speed={50}
                        className="intro-title"
                        cursor={false}
                    />
                    <TypeAnimation
                        sequence={[800, "Développeur d'application web"]}
                        wrapper="h2"
                        speed={60}
                        className="intro-subtitle"
                        cursor={false}
                    />
                    <p className="intro-text">
                        Bienvenue sur mon portfolio ! Je suis un développeur web passionné qui se lance dans le monde
                        excitant de la création web, je suis déterminé à acquérir de l'expérience et à développer mes
                        compétences dans ce domaine en constante évolution. Je suis spécialisé dans la création de sites
                        web dynamiques et attrayants en utilisant les langages HTML, CSS et JavaScript. Bien que je
                        n'aie pas encore d'expérience professionnelle, je suis plein d'enthousiasme et prêt à relever de
                        nouveaux défis. Explorez mon portfolio pour découvrir mes projets personnels et mes réalisations
                        en tant que développeur en herbe.
                    </p>
                    <div className="intro-icons">
                        <a href="https://github.com/Ichivin" target="_blank">
                            <i className="fa-brands fa-github intro-icon"></i>
                        </a>
                        <i className="fa-brands fa-linkedin intro-icon"></i>
                    </div>
                </div>
                <div className="intro-img">
                    <img src={webdev} alt="Kévin Blondiau" />
                </div>
            </div>
            <a className="header-link" href="#projets" onClick={(e) => scrollTo(e, "projets")}>
                <i className="fa-solid fa-arrow-down intro-arrow"></i>
            </a>
        </section>
    );
  ];

  return (
    <section className="intro-section">
      <div className="intro">
        <div className="intro-container">
          <TypeAnimation
            sequence={["Kévin Blondiau"]}
            wrapper="h1"
            speed={50}
            className="intro-title"
            cursor={false}
          />
          <TypeAnimation
            sequence={[800, "Développeur d'application web"]}
            wrapper="h2"
            speed={60}
            className="intro-subtitle"
            cursor={false}
          />
          <p className="intro-text">
            Bienvenue sur notre site ! Nous sommes une entreprise spécialisée
            dans la création de solutions web modernes et performantes. Nous
            accompagnons nos clients dans la conception de sites internet
            dynamiques, esthétiques et adaptés à leurs besoins, en utilisant des
            technologies fiables telles que HTML, CSS et JavaScript. Notre
            objectif est de proposer des expériences digitales efficaces,
            optimisées et évolutives, tout en mettant l’accent sur la qualité,
            la clarté et la satisfaction client. Découvrez nos réalisations et
            n’hésitez pas à nous contacter pour concrétiser vos projets
            numériques.
          </p>
          <div className="intro-icons">
            <i className="fa-brands fa-linkedin intro-icon"></i>
          </div>
        </div>
        <div className="intro-img">
          <img src={webdev} alt="Kévin Blondiau" />
        </div>
      </div>
      <a
        className="header-link"
        href="#projets"
        onClick={(e) => scrollTo(e, "projets")}
      >
        <i className="fa-solid fa-arrow-down intro-arrow"></i>
      </a>
    </section>
  );
}

export default Intro;
