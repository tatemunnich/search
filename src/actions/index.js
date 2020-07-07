import {
    TOGGLE_PLATFORM,
    SET_RESULTS
} from "./types";


export function togglePlatform(payload) {
    return {type: TOGGLE_PLATFORM, payload}
}

export function setResults(payload) {
    return {type: SET_RESULTS, payload}
}
