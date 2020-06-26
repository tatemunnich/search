import React from 'react'
import PropTypes from 'prop-types';
import resultItemStyle from "./Styles";
import IconGrabber from "./IconGrabber";


const ResultItem = ({appName, appClassification, ind}) => {
    return (
        <div style={resultItemStyle(appClassification)}>
            <IconGrabber ind={ind} className="appIcon"/>
            <p>{appName+': '+appClassification}</p>
        </div>
    )
};

ResultItem.propTypes = {
    appName: PropTypes.string.isRequired,
    appClassification: PropTypes.string.isRequired
};

export default ResultItem
