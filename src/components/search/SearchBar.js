import React from "react";

const SearchBar = ({onSubmit, onChange}) => {
    return (
        <form onSubmit={onSubmit} style={{display: "flex"}}>
            <input
                type="text"
                name="query"
                autoComplete="off"
                style={{flex: "10", padding: '5px'}}
                // onChange={onChange}
            />
            <input
                type="submit"
                value="Search"
                className="btn"
                style={{flex: '1'}}
                hidden={false}
            />
        </form>
    );
}

export default SearchBar
