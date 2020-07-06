import {
    TOGGLE_PLATFORM,
    SEARCH_APPS
} from "./types";

export function togglePlatform(payload) {
    return {type: TOGGLE_PLATFORM, payload}
}

export function searchApps(payload) {
    return {type: SEARCH_APPS, payload}
}
