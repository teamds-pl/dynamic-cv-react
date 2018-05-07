import React from 'react';
import './StandardSection.css';

function StandardSection(props) {
    const title = props.title;
    const imgSrc = props.imgSrc;
    const content = props.content;
    return (
        <div className="Cv_section">
            <div className="Cv_section-title">
                <img src={imgSrc} className="Cv-logo" alt="logo" />
                <span>{title}</span>
            </div>
            <div className="Cv_section-content">
                {content ? content : ""}
            </div>
        </div>
    );
}

export default StandardSection;
