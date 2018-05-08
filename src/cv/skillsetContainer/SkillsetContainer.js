import React from 'react';
import Skillset from "./skillset/Skillset";
import './SkillsetContainer.css';

function SkillsetContainer(props) {
    const { sourcesSkillset, userSkillset } = props;

    const skillsetList = userSkillset ? (
        <Skillset skillset={userSkillset} />
    ) : [];

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
