import {TOGGLE_PLATFORM} from "../actions/types";
import {Platform} from "./index";


const platformToggle = (state = Platform.ANDROID, action) => {
    switch (action.type) {
        case TOGGLE_PLATFORM:
            return action.payload
        default:
            return state
    }
}

export default platformToggle
