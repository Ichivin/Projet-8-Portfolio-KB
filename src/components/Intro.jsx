import React from "react";
import "../css/intro.css";

function Intro() {
    return (
        <section className="intro">
            <h1 className="intro-title">Kévin Blondiau</h1>
            <h2 className="intro-subtitle">Développeur d'application web</h2>
            <p className="intro-text">
                Bienvenue sur mon portfolio ! Je suis un développeur web passionné qui se lance dans le monde excitant
                de la création web, je suis déterminé à acquérir de l'expérience et à développer mes compétences dans ce
                domaine en constante évolution. Je suis spécialisé dans la création de sites web dynamiques et
                attrayants en utilisant les langages HTML, CSS et JavaScript. Bien que je n'aie pas encore d'expérience
                professionnelle, je suis plein d'enthousiasme et prêt à relever de nouveaux défis. Explorez mon
                portfolio pour découvrir mes projets personnels et mes réalisations en tant que développeur en herbe.
            </p>
            <div className="intro-icons">
                <a href="https://github.com/Ichivin" target="_blank">
                    <i className="fa-brands fa-github intro-icon"></i>
                </a>
                <i className="fa-brands fa-linkedin intro-icon"></i>
            </div>
        </section>
    );
}

export default Intro;
