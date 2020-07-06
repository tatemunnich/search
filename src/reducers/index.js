import { combineReducers } from "redux";
import platformToggle from "./platformToggle";
import appsSearch from "./appsSearch";


export const Platform = {
    IOS: 'IOS',
    ANDROID: 'ANDROID'
}

const reducer = combineReducers({
    platform: platformToggle,
    app_results: appsSearch
})

export default reducer
