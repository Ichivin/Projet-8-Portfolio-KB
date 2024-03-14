import React from "react";
import "../css/projects.css";

function Projects({ title, img, text, link, github }) {
    return (
        <div className="projects">
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
                <p className="projects-text">{text}</p>
            </div>
        </div>
    );
}

export default Projects;
