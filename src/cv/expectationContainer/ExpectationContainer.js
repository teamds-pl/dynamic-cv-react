import React from 'react';
import './ExpectationContainer.css';

function ExpectationContainer(props) {
    const sourcesTarget = props.sourcesTarget;
    const professionalExpectations = props.professionalExpectations;
    return (
        <div className="Cv-expectations">
            <div className="Cv-expectations-title">
                <img src={sourcesTarget} className="Cv-logo" alt="logo" />
                <span>PROFESIONAL EXPECTATION</span>
            </div>
            <div className="Cv-expectations-desc">
                <span>{professionalExpectations ? professionalExpectations : ""}</span>
            </div>
        </div>
    );
}

export default ExpectationContainer;
