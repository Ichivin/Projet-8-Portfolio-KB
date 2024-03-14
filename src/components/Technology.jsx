import React from "react";

function Technology({ img, name, technologyLink }) {
    return (
        <li className="technologies-element">
            <img src={img} className="technologies-img" alt={`logo ${name}`} />
            <span>{name}</span>
        </li>
    );
}

export default Technology;
