import {
    TOGGLE_PLATFORM,
    SET_RESULTS,
    SET_QUERY,
    TOGGLE_SUBMITTED,
    TOGGLE_CLEARED,
    TOGGLE_TOGGLED
} from "./types";


export function togglePlatform(payload) {
    return {type: TOGGLE_PLATFORM, payload}
}

export function setResults(payload) {
    return {type: SET_RESULTS, payload}
}

export function setQuery(payload) {
    return {type: SET_QUERY, payload}
}

export function toggleSubmitted(payload) {
    return {type: TOGGLE_SUBMITTED, payload}
}

export function toggleCleared(payload) {
    return {type: TOGGLE_CLEARED, payload}
}

export function toggleToggled(payload) {
    return {type: TOGGLE_TOGGLED}
}
