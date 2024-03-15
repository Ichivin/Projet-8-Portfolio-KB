import React, { useState } from "react";
import "../css/modal.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";

function Modal() {
    const [modal, setModal] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const openModal = () => {
        setModal(!modal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "formSubmits"), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setFormData({
            name: "",
            email: "",
            message: "",
        });
        setModal(false);
    };

    return (
        <div>
            <button onClick={openModal} className="modal-button">
                Contactez moi
            </button>
            {modal && (
                <div className="modal-background">
                    <div className="modal">
                        <button onClick={openModal} className="close-button">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <p className="modal-title">Contactez moi</p>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <label className="modal-form-label">
                                Nom:
                                <input
                                    className="modal-form-input"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="modal-form-label">
                                Email:
                                <input
                                    className="modal-form-input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="modal-form-label">
                                Message:
                                <textarea
                                    className="modal-form-textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button className="modal-form-button" type="submit">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Modal;
