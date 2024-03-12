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

function Technologies() {
    return (
        <div className="technologies">
            <ul className="technologies-list">
                <li className="technologies-element">
                    <img src={html} className="technologies-img" alt="logo html" />
                    <span>HTML</span>
                </li>
                <li className="technologies-element">
                    <img src={css} className="technologies-img" alt="logo css" />
                    <span>CSS</span>
                </li>
                <li className="technologies-element">
                    <img src={js} className="technologies-img" alt="logo javascript" />
                    <span>Javascript</span>
                </li>
                <li className="technologies-element">
                    <img src={react} className="technologies-img" alt="logo react" />
                    <span>React</span>
                </li>
                <li className="technologies-element">
                    <img src={sass} className="technologies-img" alt="logo sass" />
                    <span>Sass</span>
                </li>
                <li className="technologies-element">
                    <img src={github} className="technologies-img" alt="logo github" />
                    <span>Github</span>
                </li>
                <li className="technologies-element">
                    <img src={nodejs} className="technologies-img" alt="logo node js" />
                    <span>Nodejs</span>
                </li>
                <li className="technologies-element">
                    <img src={express} className="technologies-img" alt="logo express" />
                    <span>Express</span>
                </li>
                <li className="technologies-element">
                    <img src={mongodb} className="technologies-img" alt="logo mongodb" />
                    <span>Mongodb</span>
                </li>
                <li className="technologies-element">
                    <img src={firebase} className="technologies-img" alt="logo firebase" />
                    <span>Firebase</span>
                </li>
                <li className="technologies-element">
                    <img src={npm} className="technologies-img" alt="logo npm" />
                    <span>NPM</span>
                </li>
                <li className="technologies-element">
                    <img src={vscode} className="technologies-img" alt="logo vscode" />
                    <span>VSCODE</span>
                </li>
            </ul>
        </div>
    );
}

export default Technologies;
