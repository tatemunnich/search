import React from 'react';
import './App.css';

import Results from "./components/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/SearchBar";

class App extends React.Component {

    state = {
        apps: [
            {
                id: 1,
                name: 'Facebook',
                classification: 99
            },
            {
                id: 2,
                name: 'Learn Chinese',
                classification: 3
            },
            {
                id: 3,
                name: 'Bible Free',
                classification: 5
            }
        ],
        app_results: []
    }

    componentDidMount() {
        const data = require('./app_data/data.json')
        this.setState({apps: data})
    }

    appSearch = (query) => {
        if (query.length > 3) {
            const query_lc = query.toLowerCase()
            const filter = [...this.state.apps.filter(app => app.name.toLowerCase().includes(query_lc))]
            this.setState({app_results: filter})
        } else {
            this.setState({app_results: []})
        }
    }
    //Above being called twice??

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <SearchBar appSearch={this.appSearch}/>
                    <Results apps={this.state.app_results} />
                </div>
            </div>
        );
    }
}

export default App;
