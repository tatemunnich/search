import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.css' // messes up my css
import './css/App.css';

import Results from "./components/results/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/search/SearchBar";


class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <div className="appContainer">
                    <Header/>
                    <SearchBar />
                    <Results apps={[]} />
                </div>
            </div>
        );
    }
}

export default App;
