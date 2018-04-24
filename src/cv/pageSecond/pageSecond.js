import React, { Component } from 'react';
import './pageSecond.css';

class PageSecond extends Component {
    render() {
        let user = this.props.user;
        let sources = this.props.sources;
        return (
            <div className="Cv-page" id="divToPrintPage2">
                <div className="Cv-expectations">
                    <div className="Cv-expectations-title">
                        <img src={sources.target} className="Cv-logo" alt="logo" />
                        <span>PROFESIONAL EXPECTATION</span>
                    </div>
                    <div className="Cv-expectations-desc">
                        <span>{user.professionalExpectations}</span>
                    </div>
                </div>
                <div className="Cv-skillset">
                    <div className="Cv-skillset-logo">
                        <img src={sources.skillset} className="Cv-logo" alt="logo" />
                    </div>
                    <div className="Cv-skillset-title">
                        <span>SKILLSET</span>
                    </div>
                    {this.props.skillsetList}
                </div>
                <div className="Cv-personalNote">
                    <div className="Cv-personalNote-title">
                        <img src={sources.profile} className="Cv-logo" alt="logo" />
                        <span>PERSONAL NOTE</span>
                    </div>
                    <div className="Cv-personalNote-desc">
                        {user.personalNote}
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

export default PageSecond;
