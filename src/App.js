import React, {Component} from 'react';
import Fuse from "fuse.js";
import './css/App.css';

import Results from "./components/results/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/search/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button_toggle: true,
            query: '',
            android_apps: [],
            app_results: [],
        }
    }

    componentDidMount() {
        const data = require('./app_data/android_data.json')
        this.setState({android_apps: data})

        this.fuse = new Fuse(data, {
            keys: ['name'],
            ignoreLocation: true
        });
    }

    // appSearch = (query) => {
    //     if (query.length > 2) {
    //         const query_lc = query.toLowerCase()
    //         let filter = [...this.state.android_apps.filter(app => app.name.toLowerCase().includes(query_lc))]
    //         filter.sort((a,b) => (parseInt(a.numreviews) > parseInt(b.numreviews)) ? 1: -1)
    //         filter.sort((a,b) => (a.classification > b.classification) ? 1: -1)
    //         this.setState({app_results: filter})
    //     } else {
    //         this.setState({app_results: []})
    //     }
    // }

    appSearch = (query) => {
        if (query.length > 0) {
            const result = this.fuse.search(query, {limit:25})
            this.setState({app_results: result.map(res => res.item)})
            // console.log(result.map(res => res.item))
        } else {
            this.setState({app_results: []})
        }
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.setState({'query': e.target[0].value})
        this.appSearch(e.target[0].value);
    }

    onSearchChange = (e) => {
        this.setState({'query': e.target.value});
        this.appSearch(e.target.value);
    }

    // onButtonClick = (e) => {
        // if (e.currentTarget.value !== this.state.button_toggle) {
        //     this.setState({'button_toggle': !this.state.button_toggle})
        // }

        // console.log(e)
    // }

    render() {
        const{app_results} = this.state;
        return (
            <div className="App">
                <div className="appContainer">
                    <Header/>
                    <SearchBar
                        onSubmit={this.onSearchSubmit} onChange={this.onSearchChange}
                    />
                    <Results apps={app_results} />
                </div>
            </div>
        );
    }
}

export default App;
