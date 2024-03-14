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
    return (
        <div className="technologies">
            <ul className="technologies-list">
                <Technology img={html} name={"HTMl"} />
                <Technology img={css} name={"CSS"} />
                <Technology img={js} name={"Javascript"} />
                <Technology img={react} name={"React"} />
                <Technology img={sass} name={"Sass"} />
                <Technology img={github} name={"Github"} />
                <Technology img={nodejs} name={"Nodejs"} />
                <Technology img={express} name={"Express"} />
                <Technology img={mongodb} name={"Mongodb"} />
                <Technology img={firebase} name={"Firebase"} />
                <Technology img={npm} name={"NPM"} />
                <Technology img={vscode} name={"VSCODE"} />
            </ul>
        </div>
    );
}

export default Technologies;
