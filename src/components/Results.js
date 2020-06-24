import React, {Component} from "react";
import ResultItem from "./ResultItem";
import PropTypes from 'prop-types';

class Results extends Component {
    render() {
        return this.props.apps.map((app) => (
            <ResultItem key={app.id} app={app}/>
        ));
    }
}

Results.propTypes = {
    apps: PropTypes.array.isRequired
}

export default Results;