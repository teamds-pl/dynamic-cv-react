import React from 'react';
import './Experience.css';

import circleGreyMiddle from '../../../img/circle-grey-middle.svg';
import circleMaroonMiddle from '../../../img/circle-maroon-middle.svg';

function Experience(props) {
    const { experience } = props;
    return (
        <div className="Cv-experience-row">
            <div className="Cv-experience-date">
                <span>{experience.company}</span>
                <span>{experience.time}</span>
            </div>
            <div className="Cv-experience-text">
                <img src={circleGreyMiddle} className="Cv-logo" alt="logo" />
                <div className="Cv-experience-experience-title">{experience.position}</div>
                {experience.mainProjects.map(function (project, index) {
                    return (
                        <div key={index}>
                            <div className="Cv-experience-experience-desc">
                                {project.desc}
                            </div>
                            <div className="Cv-experience-experience-technologies">
                                Technologies used: {project.technologies.reduce((a, b) => { return a + ', ' + b })}
                            </div>
                        </div>
                    )
                })}
            </div>
            {experience.projects ? experience.projects.map(function (project, index2) {
                return (
                    <div className="Cv-experience-text" key={index2}>
                        <img src={circleMaroonMiddle} className="Cv-logo" alt="logo" />
                        <div className="Cv-experience-experience-title">{project.name} as {project.title}</div>
                        <div>
                            <div className="Cv-experience-experience-desc">
                                {project.desc}
                            </div>
                            <div className="Cv-experience-experience-technologies">
                                Technologies used: {project.technologies.reduce((a, b) => { return a + ', ' + b })}
                            </div>
                        </div>
                    </div>
                )
            }) : ''}
        </div>
    );
}

export default Experience;
