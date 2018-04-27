import React, { Component } from 'react';
import bluePartCircle from '../../img/blue-part-circle.svg';
import profile from '../../img/profile.svg';
import skillset from '../../img/skillset.svg';
import target from '../../img/target.svg';
import ExpectationContainer from "../expectationContainer/ExpectationContainer";
import SkillsetContainer from "../skillsetContainer/SkillsetContainer";
import PersonalNoteContainer from "../personalNoteContainer/PersonalNoteContainer";

import './secondPage.css';

class SecondPage extends Component {
    render() {
        let user = this.props.user;
        let sources = this.props.sources;
        let skillsetList = [];
        let dafaultSources = {
            target: target,
            skillset: skillset,
            profile: profile,
            bluePartCircle: bluePartCircle
        }

        sources = { ...dafaultSources, ...sources };

        return (
            <div className="Cv-page" id="secondPage">
                <ExpectationContainer sourcesTarget={sources.target} professionalExpectations={user.professionalExpectations} />
                <SkillsetContainer sourcesSkillset={sources.skillset} userSkillset={user.skillset} />
                <PersonalNoteContainer sourcesProfile={sources.profile} userPersonalNote={user.personalNote} />
                <div className="Cv-contact">
                    <img src={sources.bluePartCircle} className="Cv-logo" alt="logo" />
                    <span>www.ds.eu</span>
                </div>
            </div>
        );
    }
}

export default SecondPage;
