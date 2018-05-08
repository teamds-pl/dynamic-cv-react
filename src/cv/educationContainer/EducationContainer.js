import React from 'react';
import Education from "./education/Education";
import './EducationContainer.css';
import StandardSection from "../standardSection/StandardSection";

function EducationContainer(props) {
    const { userEducations, educationSource } = props;

    const educationList = userEducations ? userEducations.map(function (education, index) {
        return (
            <Education education={education} key={index} />
        )
    }) : [];


    return (
        <StandardSection title="EDUCATION" imgSrc={educationSource} content={educationList} />
    );

}
export default EducationContainer;
