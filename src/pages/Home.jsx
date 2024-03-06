import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Projects from "../components/Projects";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Section>
                    <Projects />
                </Section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
