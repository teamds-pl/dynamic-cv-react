import React from 'react';
import './PersonalNoteContainer.css';

function PersonalNoteContainer(props) {
    const sourcesProfile = props.sourcesProfile;
    const userPersonalNote = props.userPersonalNote;
    return (
        <div className="Cv-personalNote">
            <div className="Cv-personalNote-title">
                <img src={sourcesProfile} className="Cv-logo" alt="logo" />
                <span>PERSONAL NOTE</span>
            </div>
            <div className="Cv-personalNote-desc">
                {userPersonalNote ? userPersonalNote : ""}
            </div>
        </div>
    );
}

export default PersonalNoteContainer;
