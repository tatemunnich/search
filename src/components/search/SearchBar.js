import React from "react";
import { connect } from "react-redux";
import {setResults} from "../../actions";
import {appSearch} from "./FuseInstances";


const SearchBar = ({platform, onSearchSubmit}) => {
    return (
        <form className="searchBar" onSubmit={e => onSearchSubmit(e, platform)}>
            <input
                className="searchInput"
                type="text"
                name="query"
                autoComplete="off"
            />
            <input
                className="clearButton"
                type="reset"
                value="X"
            />
            <input
                className="searchButton"
                type="submit"
                value="S"
            />
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        platform: state.platform
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSubmit: (e, platform) => {
            e.preventDefault()
            const results = appSearch(e.target[0].value, platform)
            dispatch(setResults(results))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
