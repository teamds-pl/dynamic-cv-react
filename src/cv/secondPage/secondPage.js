import React, { Component } from 'react';
import Skillset from "../skillset/Skillset";
import bluePartCircle from '../../img/blue-part-circle.svg';
import profile from '../../img/profile.svg';
import skillset from '../../img/skillset.svg';
import target from '../../img/target.svg';

import './secondPage.css';

class SecondPage extends Component {
    render() {
        let user = this.props.user;
        let sources = this.props.sources;
        let skillsetList = [];

        if (user.skillset) {
            skillsetList = (
                <Skillset skillset={user.skillset} />
            );
        }

        if (!sources.target) sources.target = target;
        if (!sources.skillset) sources.skillset = skillset;
        if (!sources.profile) sources.profile = profile;
        if (!sources.bluePartCircle) sources.bluePartCircle = bluePartCircle;

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
}

export default SecondPage;
