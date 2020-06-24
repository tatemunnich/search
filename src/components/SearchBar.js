import React, {Component} from "react";

export class SearchBar extends Component {
    state = {
        query: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.appSearch(this.state.query);
    }

    onChange = (e) => {
        this.setState({'query': e.target.value});
        this.props.appSearch(e.target.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} onChange={this.onChange} style={{display: "flex"}}>
                <input
                    type="text"
                    name="query"
                    autoComplete="off"
                    style={{flex: "10", padding: '5px'}}
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default SearchBar