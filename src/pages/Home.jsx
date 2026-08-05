import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Projects from "../components/Projects";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import projectsData from "../data/projectsData";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Section anchorId="projets" title={"Projets"} number={"01"}>
          <div className="projects-container">
            {projectsData.map((project) => (
              <Projects
                key={project.id}
                title={project.title}
                img={project.img}
                link={project.link}
                text={project.text}
                github={project.github}
              />
            ))}
          </div>
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
