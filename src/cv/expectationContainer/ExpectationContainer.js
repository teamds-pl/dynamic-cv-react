import React from 'react';
import './ExpectationContainer.css';
import StandardSection from "../standardSection/StandardSection";

function ExpectationContainer(props) {
    const { sourcesTarget, professionalExpectations } = props;
    return (
        <StandardSection title="PROFESIONAL EXPECTATION" imgSrc={sourcesTarget} content={professionalExpectations} />
    );
}

export default ExpectationContainer;
