import React, { Component } from 'react';
import Experience from "../experience/Experience";
import Education from "../education/Education";

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
        let experiencesList = [];
        let educationList = [];
        let dafaultSources = {
            logoDS: logoDS,
            headerLogo: headerLogo,
            experience: experience,
            education: education
        }

        if (user.title) {
            title = user.title.toLowerCase()
            if (title.includes('front-end')) {
                headerLogo = frontEnd;
            } else if (title.includes('java')) {
                headerLogo = java;
            } else if (title.includes('test')) {
                headerLogo = test;
            } else if (title.includes('bussiness')) {
                headerLogo = bussinessAnalyst;
            } else if (title.includes('cq5')) {
                headerLogo = cq5;
            }
        }

        if (user.experience) {
            experiencesList = user.experience.map(function (experience, index) {
                return (
                    <Experience experience={experience} key={index} />
                );
            });
        }

        if (user.education) {
            educationList = user.education.map(function (education, index) {
                return (
                    <Education education={education} key={index} />
                )
            });
        }

        sources = { ...dafaultSources, ...sources };

        return (
            <div className="Cv-page" id="firstPage" >
                <div className="Cv-title">
                    <img src={sources.logoDS} className="Cv-logo" alt="logo" />
                    {sources.headerLogo ? <img src={sources.headerLogo} className="Cv-logo-header" alt="logo" /> : ''}
                    <div className="text-main">{user.name ? user.name : ""}</div>
                    <div className="text-second">{user.title ? user.title : ""}</div>
                </div>
                <div className="Cv-experience">
                    <div className="Cv-experience-title">
                        <img src={sources.experience} className="Cv-logo" alt="logo" />
                        <span>EXPERIENCE</span>
                    </div>
                    {experiencesList}
                </div>
                <div className="Cv-education">
                    <div className="Cv-education-title">
                        <img src={sources.education} className="Cv-logo" alt="logo" />
                        <span>EDUCATION</span>
                    </div>
                    {educationList}
                </div>
            </div >
        );
    }
}

export default FirstPage;
