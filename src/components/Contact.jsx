import React from "react";
import "../css/contact.css";
import Modal from "./Modal";

function Contact() {
    return (
        <div className="contact">
            <p className="contact-text">
                Actuellement à la recherche d'emploi, je suis ouvert à toute opportunité. N'hésitez pas à me contacter
                pour toute offre disponible. Merci d'avance !"
            </p>
            <Modal />
        </div>
    );
}

export default Contact;
