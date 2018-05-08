import React from 'react';
import './Education.css';

import circleGreyMiddle from './../../img/circle-grey-middle.svg';

function Education(props) {
    let { education } = props;
    return (
        <div className="Cv-education-row">
            <div className="Cv-education-date">
                {education.place}
                {education.time}
            </div>
            <div className="Cv-education-date">
                <img src={circleGreyMiddle} className="Cv-logo" alt="logo" />
                <div>{education.name}</div>
                <div>{education.namePlace}</div>
            </div>
        </div>
    );
}

export default Education;
