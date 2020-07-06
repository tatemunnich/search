import React from 'react'
import PropTypes from 'prop-types';
import resultItemStyle from "./Styles";
import IconGrabber from "./IconGrabber";
import ClassIconGrabber from "./ClassIconGrabber";


const ResultItem = ({appName, appClassification, ind}) => {
    return (
        <div className="appResult" style={resultItemStyle(appClassification)}>
            <IconGrabber ind={ind}/>
            <p className="appResultText">{appName}</p>
            <ClassIconGrabber classification={appClassification}/>
        </div>
    )
};

ResultItem.propTypes = {
    appName: PropTypes.string.isRequired,
    appClassification: PropTypes.string.isRequired
};

export default ResultItem
