import React from "react";
import ResultItem from "./ResultItem";
import PropTypes from 'prop-types';

const Results = ({apps}) => {
    return apps.map((app) => {
        return <ResultItem key={app.id} appName={app.name} appClassification={app.classification} ind={app.id}/>
    });
}

Results.propTypes = {
    apps: PropTypes.array.isRequired
}

export default Results;
