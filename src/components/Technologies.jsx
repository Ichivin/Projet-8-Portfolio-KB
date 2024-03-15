import React from "react";
import "../css/technologies.css";
import react from "../images/react.png";
import html from "../images/HTML.png";
import css from "../images/css.webp";
import js from "../images/JS.png";
import sass from "../images/sass.png";
import github from "../images/github.png";
import nodejs from "../images/nodejs.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.webp";
import firebase from "../images/firebase.png";
import npm from "../images/npm.png";
import vscode from "../images/vscode.png";
import Technology from "./Technology";

function Technologies() {
    const arrayTechnologies = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "Javascript" },
        { img: react, name: "React" },
        { img: sass, name: "Sass" },
        { img: github, name: "Github" },
        { img: nodejs, name: "Nodejs" },
        { img: express, name: "Express" },
        { img: mongodb, name: "Mongodb" },
        { img: firebase, name: "firebase" },
        { img: npm, name: "NPM" },
        { img: vscode, name: "VSCODE" },
    ];
    return (
        <div className="technologies">
            <ul className="technologies-list">
                {arrayTechnologies.map(({ img, name }, i) => (
                    <Technology img={img} name={name} key={i} />
                ))}
            </ul>
        </div>
    );
}

export default Technologies;
