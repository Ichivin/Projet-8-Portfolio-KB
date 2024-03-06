import React from "react";
import logo from "../images/logo-kb.png";
import "../css/header.css";

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo KB" />
            <nav className="nav">
                <ul className="header-links">
                    <li className="header-link">Projects</li>
                    <li className="header-link">About</li>
                    <li className="header-link">Contact</li>
                    <li className="header-link">CV</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
