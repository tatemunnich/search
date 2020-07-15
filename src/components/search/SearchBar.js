import React from "react";
import { connect } from "react-redux";
import {setResults, setQuery, toggleSubmitted, toggleCleared} from "../../actions";
import {appSearch} from "./FuseInstances";
import {searchButtonStyle} from "./Styles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({query, platform, submitted, cleared, onSearchSubmit, onSearchChange, clearSearch, refFunction}) => {
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
                // ref={(input) => {input && input.focus()}}
                ref={input => refFunction(input, submitted, cleared)}
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
        cleared: state.cleared
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSubmit: (e, platform) => {
            e.preventDefault()
            const results = appSearch(e.target[0].value, platform)
            dispatch(setResults(results))
            dispatch(toggleSubmitted(true))
        },

        onSearchChange: (e) => {
            dispatch(setQuery(e.target.value))
        },

        clearSearch: () => {
            dispatch(setQuery(""));
            dispatch(toggleCleared(true))
        },

        refFunction: (input, submitted, cleared) => {
            input && submitted && dispatch(toggleSubmitted(false)) && input.blur();
            input && cleared && dispatch(toggleCleared(false)) && input.focus();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
