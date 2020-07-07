import platformToggle from "./platformToggle";
import appsSearch from "./appsSearch";
import createFuse from "../components/search/searching";


export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

const rootReducer = (state = {}, action) => {
    return {
        platform: platformToggle(state.platform, action),
        results: appsSearch(state.results, action),
        p: createFuse([])
    }
}

export default rootReducer
