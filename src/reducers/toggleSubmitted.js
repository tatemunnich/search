import {TOGGLE_SUBMITTED} from "../actions/types";


const toggleSubmitted = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SUBMITTED:
            return !state
        default:
            return state
    }
}

export default toggleSubmitted
