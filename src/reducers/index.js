import platformToggle from "./platformToggle";
import setResults from "./setResults";
import setQuery from "./setQuery";
import toggleSubmitted from "./toggleSubmitted";
import toggleCleared from "./toggleCleared";
import toggleToggled from "./toggleToggled";


export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

const rootReducer = (state = {}, action) => {
    return {
        platform: platformToggle(state.platform, action),
        results: setResults(state.results, action),
        query: setQuery(state.query, action),
        submitted: toggleSubmitted(state.submitted, action),
        cleared: toggleCleared(state.cleared, action),
        toggled: toggleToggled(state.toggled, action)
    }
}

export default rootReducer
