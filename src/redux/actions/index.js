export const TOGGLE_PLATFORM = 'TOGGLE_PLATFORM'
export const SEARCH_APPS = 'SEARCH_APPS'

export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

export function togglePlatform(platform) {
    return {type: TOGGLE_PLATFORM, platform}
}

export function searchApps(term) {
    return {type: SEARCH_APPS, term}
}
