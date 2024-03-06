import React from "react";

function Projects({ title, img, text }) {
    return (
        <div>
            <h3 className="projects-title">{title}</h3>
            <img src={img} className="projects-img" alt={title} />
            <p className="projects-text">{text}</p>
        </div>
    );
}

export default Projects;
