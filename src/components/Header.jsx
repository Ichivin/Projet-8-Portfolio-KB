import React from "react";
import logo from "../images/logo-kb.png";
import "../css/header.css";

function Header() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo KB" />
            <nav className="nav">
                <ul className="header-links">
                    <li className="header-link">
                        <button onClick={() => scrollTo("projets")}>Projets</button>
                    </li>
                    <li className="header-link">
                        <button onClick={() => scrollTo("about")}>À propos</button>
                    </li>
                    <li className="header-link">
                        <button onClick={() => scrollTo("technologies")}>Technologies</button>
                    </li>
                    <li className="header-link">
                        <button onClick={() => scrollTo("contact")}>Contact</button>
                    </li>
                    <li className="header-link">CV</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
