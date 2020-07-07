import React from "react";
import { connect } from "react-redux";
import {searchApps} from "../../actions";
import PropTypes from 'prop-types';


const SearchBar = ({onSubmit, dispatch}) => {
    return (
        <form className="searchBar" onSubmit={e => {
            e.preventDefault()
            dispatch(searchApps(e.target[0].value))
            onSubmit(e)
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

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default connect()(SearchBar)
