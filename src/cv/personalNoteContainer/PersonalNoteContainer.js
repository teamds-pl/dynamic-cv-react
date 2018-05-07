import React from 'react';
import './PersonalNoteContainer.css';
import StandardSection from "../standardSection/StandardSection";

function PersonalNoteContainer(props) {
    const { sourcesProfile, userPersonalNote } = props;
    return (
        <StandardSection title="PERSONAL NOTE" imgSrc={sourcesProfile} content={userPersonalNote} />
    );
}

export default PersonalNoteContainer;
