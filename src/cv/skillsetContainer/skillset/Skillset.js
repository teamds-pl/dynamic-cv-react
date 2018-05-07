import React, { Component } from 'react';
import './Skillset.css';

import circleGreyMiddle from '../../../img/circle-grey-middle.svg';
import circleMaroonMiddle from '../../../img/circle-maroon-middle.svg';

class Skillset extends Component {
    render() {
        const { skillset } = this.props;
        return (
            <div>
                <div className="Cv-skillset-row">
                    <span>Languages</span>
                    {skillset.languages.main.map(function (skill, index) {
                        return (
                            <span key={index}>
                                <img src={circleMaroonMiddle} className="Cv-logo" alt="logo" />
                                {skill},
                            </span>
                        )
                    })}
                    {skillset.languages.second.map(function (skill, index) {
                        return (
                            <span key={index}>
                                <img src={circleGreyMiddle} className="Cv-logo" alt="logo" />
                                {skill},
                            </span>
                        )
                    })}
                </div>
                <div className="Cv-skillset-row">
                    <span>Others</span>
                    {skillset.others.main.map(function (skill, index) {
                        return (
                            <span key={index}>
                                <img src={circleMaroonMiddle} className="Cv-logo" alt="logo" />
                                {skill},
                            </span>
                        )
                    })}
                    {skillset.others.second.map(function (skill, index) {
                        return (
                            <span key={index}>
                                <img src={circleGreyMiddle} className="Cv-logo" alt="logo" />
                                {skill},
                            </span>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Skillset;
