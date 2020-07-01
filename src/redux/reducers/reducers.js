import {
    Platform, TOGGLE_PLATFORM, SEARCH_APPS
} from "../actions";
import Fuse from "fuse.js";


const initialState = {
    platform: Platform.ANDROID,
    query: '',
    android_apps: require('../../app_data/android_data.json'),
    ios_apps: require('../../app_data/apple_data.json'),
    app_results: [],
    android_fuse: new Fuse(require('../../app_data/android_data.json'), {
        keys: ['name'],
        ignoreLocation: true
    })
}

function reduxReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLATFORM:
            return Object.assign({}, state, {
                platform: action.platform
            })
        case SEARCH_APPS:
            if (action.term.length > 2) {
                const query_lc = action.term.toLowerCase()
                let filter = [...this.state.android_apps.filter(app => app.name.toLowerCase().includes(query_lc))]
                filter.sort((a,b) => (parseInt(a.numreviews) > parseInt(b.numreviews)) ? 1: -1)
                filter.sort((a,b) => (a.classification > b.classification) ? 1: -1)
                return Object.assign({}, state, {
                    app_results: filter
                })
            } else {
                return Object.assign({}, state, {
                    app_results: {}
                })
            }
        default:
            return state
    }
}

export default reduxReducer
