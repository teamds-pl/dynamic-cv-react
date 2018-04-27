import React from 'react';
import Skillset from "./skillset/Skillset";
import './SkillsetContainer.css';

function SkillsetContainer(props) {
    const sourcesSkillset = props.sourcesSkillset;
    const userSkillset = props.userSkillset;
    let skillsetList = [];

    if (userSkillset) {
        skillsetList = (
            <Skillset skillset={userSkillset} />
        );
    }

    return (
        <div className="Cv-skillset">
            <div className="Cv-skillset-logo">
                <img src={sourcesSkillset} className="Cv-logo" alt="logo" />
            </div>
            <div className="Cv-skillset-title">
                <span>SKILLSET</span>
            </div>
            {skillsetList}
        </div>
    );
}

export default SkillsetContainer;
