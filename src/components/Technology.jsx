import React from "react";

function Technology({ img, name }) {
    return (
        <li className="technologies-element">
            <img src={img} className="technologies-img" alt={`logo ${name}`} />
            <span>{name}</span>
        </li>
    );
}

export default Technology;
