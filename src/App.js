import React, {Component} from 'react';
import Fuse from "fuse.js";
// import 'bootstrap/dist/css/bootstrap.css' // messes up my css
import './css/App.css';

import Results from "./components/results/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/search/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ignoreLocation: true,
            threshold: 0.3
        });
    }

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

    render() {
        const{app_results} = this.state;
        return (
            <div className="App">
                <div className="appContainer">
                    <Header/>
                    <SearchBar
                        onSubmit={this.onSearchSubmit}
                    />
                    <Results apps={app_results} />
                </div>
            </div>
        );
    }
}

export default App;
