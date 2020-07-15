import platformToggle from "./platformToggle";
import setResults from "./setResults";
import setQuery from "./setQuery";


export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

const rootReducer = (state = {}, action) => {
    return {
        platform: platformToggle(state.platform, action),
        results: setResults(state.results, action),
        query: setQuery(state.query, action)
    }
}

export default rootReducer
