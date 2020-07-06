import {
    TOGGLE_PLATFORM,
    SEARCH_APPS
} from '../actions/types'


export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

const initialState = {
    platform: Platform.ANDROID,
    query: '',
    android_apps: [],
    ios_apps: [],
    app_results: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLATFORM:
            return ({
                ...state,
                platform: action.payload
            })
        case SEARCH_APPS:
            return ({
                ...state,
                app_results: [action.payload] // TODO: add search function
            })
        default:
            return state
    }
}

export default reducer
