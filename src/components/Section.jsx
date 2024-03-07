import React from "react";

function Section({ title, number, anchorId, children }) {
    return (
        <div className="section">
            <h2 id={anchorId} className="section-title">
                {title}
            </h2>
            <span className="section-number">{number}</span>
            {children}
        </div>
    );
}

export default Section;
