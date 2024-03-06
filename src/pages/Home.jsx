import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Projects from "../components/Projects";
import booki from "../images/site-booki.PNG";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Section title={"Projets"} number={"1"}>
                    <Projects
                        title={"Booki"}
                        img={booki}
                        text={`Réalisation du front-end d'un site d'agence de voyage nommé Booki avec du code HTML et CSS.
                         Le site est responsive au format tablette et mobile.`}
                    />
                </Section>
                <Section title={"About"} number={"2"} />
                <Section title={"Contact"} number={"3"} />
            </main>
            <Footer />
        </>
    );
}

export default Home;
