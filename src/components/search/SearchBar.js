import React from "react";
import { connect } from "react-redux";
import {setResults, setQuery} from "../../actions";
import {appSearch} from "./FuseInstances";
import {searchButtonStyle} from "./Styles"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({query, platform, onSearchSubmit, onSearchChange, clearSearch}) => {
    return (
        <form className="searchBar" onSubmit={e => onSearchSubmit(e, platform)} >

            <input
                onChange={onSearchChange}
                className="searchInput"
                type="text"
                name="query"
                autoComplete="off"
                value={query}
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
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchSubmit: (e, platform) => {
            e.preventDefault()
            const results = appSearch(e.target[0].value, platform)
            dispatch(setResults(results))
        },

        onSearchChange: (e) => {
                dispatch(setQuery(e.target.value))
        },

        clearSearch: () => {
            dispatch(setQuery(""))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
