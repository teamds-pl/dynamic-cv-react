import React from 'react';
import './PersonalNoteContainer.css';
import StandardSection from "../standardSection/StandardSection";

function PersonalNoteContainer(props) {
    const sourcesProfile = props.sourcesProfile;
    const userPersonalNote = props.userPersonalNote;
    return (
        <StandardSection title="PERSONAL NOTE" imgSrc={sourcesProfile} content={userPersonalNote} />
    );
}

export default PersonalNoteContainer;
