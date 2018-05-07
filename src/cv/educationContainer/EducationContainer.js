import React from 'react';
import Education from "./education/Education";
import './EducationContainer.css';
import StandardSection from "../standardSection/StandardSection";

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
        <StandardSection title="EDUCATION" imgSrc={educationSource} content={educationList} />
    );
}

export default EducationContainer;
