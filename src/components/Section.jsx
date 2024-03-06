import React from "react";

function Section({ title, number, children }) {
    return (
        <div className="section">
            <h2 className="section-title">{title}</h2>
            <span className="section-number">{number}</span>
            {children}
        </div>
    );
}

export default Section;
