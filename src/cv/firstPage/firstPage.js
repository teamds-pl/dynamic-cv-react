import React, { Component } from 'react';
import EducationContainer from "../educationContainer/EducationContainer";
import ExperienceContainer from "../experienceContainer/ExperienceContainer";
import TitleContainer from "../titleContainer/TitleContainer";

import logoDS from '../../img/logoDS.svg';
import frontEnd from '../../img/front-end.svg';
import java from '../../img/java.svg';
import test from '../../img/test.svg';
import bussinessAnalyst from '../../img/bussinessAnalyst.svg';
import cq5 from '../../img/cq5.svg';
import education from '../../img/education.svg';
import experience from '../../img/experience.svg';

import './firstPage.css';

class FirstPage extends Component {
    render() {
        let title = "";
        let headerLogo = "";
        let user = this.props.user;
        let sources = this.props.sources;
        let dafaultSources = {
            logoDS: logoDS,
            headerLogo: headerLogo,
            experience: experience,
            education: education
        }

        if (user.title) {
            title = user.title.toLowerCase()
            if (title.includes('front-end')) {
                dafaultSources.headerLogo = frontEnd;
            } else if (title.includes('java')) {
                dafaultSources.headerLogo = java;
            } else if (title.includes('test')) {
                dafaultSources.headerLogo = test;
            } else if (title.includes('bussiness')) {
                dafaultSources.headerLogo = bussinessAnalyst;
            } else if (title.includes('cq5')) {
                dafaultSources.headerLogo = cq5;
            }
        }

        sources = { ...dafaultSources, ...sources };

        return (
            <div className="Cv-page" id="firstPage" >
                <TitleContainer user={user} sources={sources} />
                <ExperienceContainer userExperience={user.experience} experienceSource={sources.experience} />
                <EducationContainer userEducations={user.education} educationSource={sources.education} />
            </div >
        );
    }
}

export default FirstPage;
