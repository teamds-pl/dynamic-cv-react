import React from 'react';
import Experience from "./experience/Experience";
import './ExperienceContainer.css';

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
        <div className="Cv-experience">
            <div className="Cv-experience-title">
                <img src={experienceSource} className="Cv-logo" alt="logo" />
                <span>EXPERIENCE</span>
            </div>
            {experiencesList}
        </div>
    );
}

export default ExperienceContainer;
