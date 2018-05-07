import React from 'react';
import Experience from "./experience/Experience";
import './ExperienceContainer.css';
import StandardSection from "../standardSection/StandardSection";

function ExperienceContainer(props) {
    const { userExperience, experienceSource } = props;

    const experiencesList = userExperience ? userExperience.map(function (experience, index) {
        return (
            <Experience experience={experience} key={index} />
        );
    }) : [];

    return (
        <StandardSection title="EXPERIENCE" imgSrc={experienceSource} content={experiencesList} />
    );
}

export default ExperienceContainer;
