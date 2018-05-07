import React from 'react';
import './TitleContainer.css';

function TitleContainer(props) {
    const { sources, user } = props;

    return (
        <div className="Cv-title">
            <img src={sources.logoDS} className="Cv-logo" alt="logo" />
            {sources.headerLogo ? <img src={sources.headerLogo} className="Cv-logo-header" alt="logo" /> : ''}
            <div className="text-main">{user.name ? user.name : ""}</div>
            <div className="text-second">{user.title ? user.title : ""}</div>
        </div>
    );
}

export default TitleContainer;
