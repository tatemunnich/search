import {SEARCH_APPS} from "../actions/types";


const appsSearch = (state = [], action) => {
    switch (action.type) {
        case SEARCH_APPS:
            return action.payload
        default:
            return state
    }
}

export default appsSearch
