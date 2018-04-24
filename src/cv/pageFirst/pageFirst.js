import React, { Component } from 'react';
import './pageFirst.css';

class PageFirst extends Component {
    render() {
        let user = this.props.user;
        let sources = this.props.sources;
        return (
            <div className="Cv-page" id="divToPrintPage1">
                <div className="Cv-title">
                    <img src={sources.logoDS} className="Cv-logo" alt="logo" />
                    {sources.headerLogo ? <img src={sources.headerLogo} className="Cv-logo-header" alt="logo" /> : ''}
                    <div className="text-main">{user.name}</div>
                    <div className="text-second">{user.title}</div>
                </div>
                <div className="Cv-experience">
                    <div className="Cv-experience-title">
                        <img src={sources.experience} className="Cv-logo" alt="logo" />
                        <span>EXPERIENCE</span>
                    </div>
                    {this.props.experiencesList}
                </div>
                <div className="Cv-education">
                    <div className="Cv-education-title">
                        <img src={sources.education} className="Cv-logo" alt="logo" />
                        <span>EDUCATION</span>
                    </div>
                    {this.props.educationList}
                </div>
            </div>
        );
    }
}

export default PageFirst;
