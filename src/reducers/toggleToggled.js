import {TOGGLE_TOGGLED} from "../actions/types";


const toggleToggled = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_TOGGLED:
            return !state
        default:
            return state
    }
}

export default toggleToggled
