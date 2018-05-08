import React from 'react';
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

function FirstPage(props) {
    let headerLogo = "";
    let { user, sources } = props;
    let defaultSources = {
        logoDS: logoDS,
        headerLogo: headerLogo,
        experience: experience,
        education: education
    }

    if (user.title) {
        const title = user.title.toLowerCase()
        if (title.includes('front-end')) {
            defaultSources.headerLogo = frontEnd;
        } else if (title.includes('java')) {
            defaultSources.headerLogo = java;
        } else if (title.includes('test')) {
            defaultSources.headerLogo = test;
        } else if (title.includes('bussiness')) {
            defaultSources.headerLogo = bussinessAnalyst;
        } else if (title.includes('cq5')) {
            defaultSources.headerLogo = cq5;
        }
    }

    sources = { ...defaultSources, ...sources };

    return (
        <div className="Cv-page" id="firstPage" >
            <TitleContainer user={user} sources={sources} />
            <ExperienceContainer userExperience={user.experience} experienceSource={sources.experience} />
            <EducationContainer userEducations={user.education} educationSource={sources.education} />
        </div >
    );
}

export default FirstPage;
