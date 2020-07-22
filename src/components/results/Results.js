import React from "react";
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import ResultItem from "./ResultItem";
import emailRequestLink from "./emailRequestLink";


const Results = ({apps, submitted_query, platform}) => {
    return (
    <div>
        <div className="appResults">
                {apps.map((app) => {
                    return (<ResultItem
                                key={app.id}
                                appName={app.name} ind={app.id}
                                appClassification={app.classification}
                                url={app.url}
                            />)
                })}
            </div>

        {submitted_query === "" ? null :
            <footer>
                <a href={emailRequestLink(submitted_query, platform)} target="_blank" rel="noopener noreferrer"
                   style={{textDecoration: "none"}}>
                    <div>
                        <p>{"Can't find what you're looking for? Click to send a request to get credit for " + submitted_query}</p>
                    </div>
                </a>
            </footer>
        }
    </div>);
}

Results.propTypes = {
    apps: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        apps: state.results,
        submitted_query: state.submitted_query,
        platform: state.platform
    }
}

export default connect(mapStateToProps)(Results);
