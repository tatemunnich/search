import React from 'react'
import PropTypes from 'prop-types';
import resultItemStyle from "./Styles";

const ResultItem = ({appName, appClassification}) => {
    return (
        <div style={resultItemStyle(appClassification)}>
            <p>{appName+': '+appClassification}</p>
        </div>
    )
};

ResultItem.propTypes = {
    appName: PropTypes.string.isRequired,
    appClassification: PropTypes.string.isRequired
};

export default ResultItem
