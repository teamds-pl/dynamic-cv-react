import React from 'react';
import Education from "./education/Education";
import './EducationContainer.css';

function EducationContainer(props) {
    const userEducations = props.userEducations;
    const educationSource = props.educationSource;
    let educationList = [];

    if (userEducations) {
        educationList = userEducations.map(function (education, index) {
            return (
                <Education education={education} key={index} />
            )
        });
    }

    return (
        <div className="Cv-education">
            <div className="Cv-education-title">
                <img src={educationSource} className="Cv-logo" alt="logo" />
                <span>EDUCATION</span>
            </div>
            {educationList}
        </div>
    );
}

export default EducationContainer;
