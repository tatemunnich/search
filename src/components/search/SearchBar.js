import React from "react";
import PropTypes from 'prop-types';


const SearchBar = ({onSubmit}) => {
    return (
        <form className="searchBar" onSubmit={onSubmit}>
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

export default SearchBar
