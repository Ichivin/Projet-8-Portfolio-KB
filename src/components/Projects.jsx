import React from "react";
import "../css/projects.css";

function Projects({ title, img, text }) {
    return (
        <div className="projects">
            <h3 className="projects-title">{title}</h3>
            <div className="projects-wrapper">
                <img src={img} className="projects-img" alt={title} />
                <p className="projects-text">{text}</p>
            </div>
        </div>
    );
}

export default Projects;
