import React from "react";
import { connect } from "react-redux";
import {setResults, setQuery, toggleSubmitted, toggleCleared, toggleToggled} from "../../actions";
import {appSearch} from "./FuseInstances";
import {searchButtonStyle} from "./Styles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({query, platform, submitted, cleared, toggled, onSearchSubmit, onSearchChange, clearSearch, refFunction}) => {
    return (
        <form className="searchBar" onSubmit={e => onSearchSubmit(e, platform)} >

            <input
                onChange={onSearchChange}
                className="searchInput"
                type="text"
                name="query"
                autoComplete="off"
                value={query}
                autoFocus={true}
                ref={input => refFunction(input, submitted, cleared, toggled)}
            />

            { query === ""
                ? null
                :   <button className="clearButton" type="reset" onClick={clearSearch}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
            }


            <button className="searchButton" type="submit" style={searchButtonStyle(query)}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        platform: state.platform,
        query: state.query,
        submitted: state.submitted,
        cleared: state.cleared,
        toggled: state.toggled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSubmit: (e, platform) => {
            e.preventDefault()
            const results = appSearch(e.target[0].value, platform)
            dispatch(setResults(results))
            dispatch(toggleSubmitted())
        },

        onSearchChange: (e) => {
            dispatch(setQuery(e.target.value))
        },

        clearSearch: () => {
            dispatch(setQuery(""));
            dispatch(toggleCleared())
        },

        refFunction: (input, submitted, cleared, toggled) => {
            input && submitted && dispatch(toggleSubmitted()) && input.blur();
            input && cleared && dispatch(toggleCleared()) && input.focus();
            input && toggled && dispatch(toggleToggled()) && input.focus();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
