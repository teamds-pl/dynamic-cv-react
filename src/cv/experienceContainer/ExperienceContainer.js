import React from 'react';
import Experience from "./experience/Experience";
import './ExperienceContainer.css';
import StandardSection from "../standardSection/StandardSection";

function ExperienceContainer(props) {
    const userExperience = props.userExperience;
    const experienceSource = props.experienceSource;
    let experiencesList = [];

    if (userExperience) {
        experiencesList = userExperience.map(function (experience, index) {
            return (
                <Experience experience={experience} key={index} />
            );
        });
    }

    return (
        <StandardSection title="EXPERIENCE" imgSrc={experienceSource} content={experiencesList} />
    );
}

export default ExperienceContainer;
