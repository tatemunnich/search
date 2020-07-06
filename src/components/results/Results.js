import React from "react";
import PropTypes from 'prop-types';
import ResultItem from "./ResultItem";


const Results = ({apps}) => {
    return (<div className="appResults">
                {apps.map((app) => {
                    return (<ResultItem
                                key={app.id}
                                appName={app.name} ind={app.id}
                                appClassification={app.classification}
                            />)
                })}
            </div>);
}

Results.propTypes = {
    apps: PropTypes.array.isRequired
}

export default Results;
