import React, {Component} from 'react';
import './css/App.css';

import Results from "./components/results/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/search/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            apps: [],
            app_results: []
        }
    }

    componentDidMount() {
        const data = require('./app_data/android_data.json')
        this.setState({apps: data})
    }

    appSearch = (query) => {
        if (query.length > 2) {
            const query_lc = query.toLowerCase()
            let filter = [...this.state.apps.filter(app => app.name.toLowerCase().includes(query_lc))]
            filter.sort((a,b) => (parseInt(a.numreviews) > parseInt(b.numreviews)) ? 1: -1)
            filter.sort((a,b) => (a.classification > b.classification) ? 1: -1)
            this.setState({app_results: filter})
        } else {
            this.setState({app_results: []})
        }
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.appSearch(this.state.query);
    }

    onSearchChange = (e) => {
        this.setState({'query': e.target.value});
        this.appSearch(e.target.value);
    }

    render() {
        const{app_results} = this.state;
        return (
            <div className="App">
                <div className="appContainer">
                    <Header/>
                    <SearchBar
                        query={this.query} onSubmit={this.onSearchSubmit} onChange={this.onSearchChange}
                    />
                    <Results apps={app_results} />
                </div>
            </div>
        );
    }
}

export default App;
