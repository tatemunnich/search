import {TOGGLE_CLEARED} from "../actions/types";


const toggleCleared = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_CLEARED:
            return !state
        default:
            return state
    }
}

export default toggleCleared
