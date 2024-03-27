import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Projects from "../components/Projects";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

function Home() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const q = query(collection(db, "projects"));
                const querySnapshot = await getDocs(q);

                setProjects(
                    querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }))
                        .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
                );
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Intro />
                <Section anchorId="projets" title={"Projets"} number={"01"}>
                    <div className="projects-container">
                        {projects.map((project) => (
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
