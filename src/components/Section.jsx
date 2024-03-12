import React from "react";
import "../css/section.css";

function Section({ title, number, anchorId, children }) {
    return (
        <div className="section">
            <h2 id={anchorId} className="section-title">
                <span>{title}</span>
                <span className="section-number">{number}</span>
            </h2>
            {children}
        </div>
    );
}

export default Section;
