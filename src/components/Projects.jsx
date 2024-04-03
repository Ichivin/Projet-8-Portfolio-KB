import React, { useRef } from "react";
import "../css/projects.css";
import { useInView } from "framer-motion";

function Projects({ title, img, text, link, github }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className={`projects ${isInView ? "fadeIn" : ""}`} ref={ref}>
            <div className="projects-header">
                <h3 className="projects-title">{title}</h3>
                {github && (
                    <a className="projects-github" href={github} target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                )}
            </div>
            <div className="projects-wrapper">
                <a href={link} target="_blank">
                    <img src={img} className="projects-img" alt={title} />
                </a>
                <div className="projects-info">
                    <p className="projects-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
