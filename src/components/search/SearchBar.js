import React from "react";
import { connect } from "react-redux";
import {setResults, setQuery, toggleSubmitted} from "../../actions";
import {appSearch} from "./FuseInstances";
import {searchButtonStyle} from "./Styles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({query, platform, submitted, onSearchSubmit, onSearchChange, clearSearch, rref}) => {
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
                ref={input => rref(input, submitted)}
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
        submitted: state.submitted
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
            dispatch(setQuery(""))
        },

        rref: (input, submitted) => {
            input && submitted && dispatch(toggleSubmitted(false)) && input.blur()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
