import {SET_QUERY} from "../actions/types";


const setQuery = (state = "", action) => {
    switch (action.type) {
        case SET_QUERY:
            return action.payload
        default:
            return state
    }
}

export default setQuery
