import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.css' // messes up my css
import './css/App.css';

import Results from "./components/results/Results";
import Header from "./components/layout/Header";
import SearchBar from "./components/search/SearchBar";
import ToggleButtons from "./components/layout/ToggleButtons";


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="appContainer">
                    <Header />
                    <ToggleButtons />
                    <SearchBar />
                    <Results />
                </div>
            </div>
        );
    }
}

export default App;
