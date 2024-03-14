import React, { useState } from "react";
import logo from "../images/logo-kb.png";
import "../css/header.css";

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo KB" />
            <i className="fa-solid fa-bars header-burger" onClick={() => setIsVisible(!isVisible)}></i>

            <nav className={`nav ${isVisible ? "visible" : ""}`}>
                <ul className="header-links">
                    <li>
                        <a className="header-link" href="#projets" onClick={(e) => scrollTo(e, "projets")}>
                            <span className="header-link-number">01</span>
                            <span className="header-link-name">Projets</span>
                        </a>
                    </li>
                    <li>
                        <a className="header-link" href="#about" onClick={(e) => scrollTo(e, "about")}>
                            <span className="header-link-number">02</span>
                            <span className="header-link-name">À propos</span>
                        </a>
                    </li>
                    <li>
                        <a className="header-link" href="#technologies" onClick={(e) => scrollTo(e, "technologies")}>
                            <span className="header-link-number">03</span>
                            <span className="header-link-name">Technologies</span>
                        </a>
                    </li>
                    <li>
                        <a className="header-link" href="#contact" onClick={(e) => scrollTo(e, "contact")}>
                            <span className="header-link-number">04</span>
                            <span className="header-link-name">Contact</span>
                        </a>
                    </li>
                </ul>
                <a className="header-link-cv" href="">
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Header;
