import React from "react";
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import ResultItem from "./ResultItem";


const Results = ({apps}) => {
    return (<div className="appResults">
                {apps.map((app) => {
                    return (<ResultItem
                                key={app.id}
                                appName={app.name} ind={app.id}
                                appClassification={app.classification}
                                url={app.url}
                            />)
                })}
            </div>);
}

Results.propTypes = {
    apps: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        apps: state.results
    }
}

export default connect(mapStateToProps)(Results);
