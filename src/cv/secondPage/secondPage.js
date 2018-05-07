import React from 'react';
import Skillset from "../skillset/Skillset";
import bluePartCircle from '../../img/blue-part-circle.svg';
import profile from '../../img/profile.svg';
import skillset from '../../img/skillset.svg';
import target from '../../img/target.svg';

import './secondPage.css';

function SecondPage(props) {
    let { user, sources } = props;
    let defaultSources = {
        target: target,
        skillset: skillset,
        profile: profile,
        bluePartCircle: bluePartCircle
    }

    const skillsetList = user.skillset ? (
        <Skillset skillset={user.skillset} />
    ) : [];

    sources = { ...defaultSources, ...sources };

    return (
        <div className="Cv-page" id="secondPage">
            <div className="Cv-expectations">
                <div className="Cv-expectations-title">
                    <img src={sources.target} className="Cv-logo" alt="logo" />
                    <span>PROFESIONAL EXPECTATION</span>
                </div>
                <div className="Cv-expectations-desc">
                    <span>{user.professionalExpectations ? user.professionalExpectations : ""}</span>
                </div>
            </div>
            <div className="Cv-skillset">
                <div className="Cv-skillset-logo">
                    <img src={sources.skillset} className="Cv-logo" alt="logo" />
                </div>
                <div className="Cv-skillset-title">
                    <span>SKILLSET</span>
                </div>
                {skillsetList}
            </div>
            <div className="Cv-personalNote">
                <div className="Cv-personalNote-title">
                    <img src={sources.profile} className="Cv-logo" alt="logo" />
                    <span>PERSONAL NOTE</span>
                </div>
                <div className="Cv-personalNote-desc">
                    {user.personalNote ? user.personalNote : ""}
                </div>
            </div>
            <div className="Cv-contact">
                <img src={sources.bluePartCircle} className="Cv-logo" alt="logo" />
                <span>www.ds.eu</span>
            </div>
        </div>
    );
}

export default SecondPage;
