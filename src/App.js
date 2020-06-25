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
        const data = require('./app_data/data.json')
        this.setState({apps: data})
    }

    appSearch = (query) => {
        console.log(query)
        if (query.length > 2) {
            const query_lc = query.toLowerCase()
            const filter = [...this.state.apps.filter(app => app.name.toLowerCase().includes(query_lc))]
            this.setState({app_results: filter})
        } else {
            this.setState({app_results: []})
        }
    }

    render() {
        const{app_results} = this.state;
        return (
            <div className="App">
                <div className="appContainer">
                    <Header/>
                    <SearchBar appSearch={this.appSearch}/>
                    <Results apps={app_results} />
                </div>
            </div>
        );
    }
}

export default App;
