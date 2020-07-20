import {
    TOGGLE_PLATFORM,
    SET_RESULTS,
    SET_QUERY,
    TOGGLE_SUBMITTED,
    TOGGLE_CLEARED,
    TOGGLE_TOGGLED,
    SET_SUBMITTED_QUERY
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

export function setSubmittedQuery(payload) {
    return {type: SET_SUBMITTED_QUERY, payload}
}

export function toggleSubmitted() {
    return {type: TOGGLE_SUBMITTED}
}

export function toggleCleared() {
    return {type: TOGGLE_CLEARED}
}

export function toggleToggled() {
    return {type: TOGGLE_TOGGLED}
}
