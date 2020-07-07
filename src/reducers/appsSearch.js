import {SET_RESULTS} from "../actions/types";


const appsSearch = (state = [], action) => {
    switch (action.type) {
        case SET_RESULTS:
            return action.payload
        default:
            return state
    }
}

export default appsSearch
