import React from "react";
import { connect } from "react-redux";
import {setResults} from "../../actions";
import {appSearch} from "./FuseInstances";


const SearchBar = ({platform, dispatch}) => {
    return (
        <form className="searchBar" onSubmit={e => {
            e.preventDefault()
            const results = appSearch(e.target[0].value, platform)
            dispatch(setResults(results))
        }}>
            <input
                className="searchInput"
                type="text"
                name="query"
                autoComplete="off"
            />
            <input
                className="searchButton"
                type="submit"
                value="Search"
            />
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        platform: state.platform
    }
}

export default connect(mapStateToProps)(SearchBar)
