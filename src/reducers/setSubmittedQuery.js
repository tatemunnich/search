import {SET_SUBMITTED_QUERY} from "../actions/types";


const setSubmittedQuery = (state = "", action) => {
    switch (action.type) {
        case SET_SUBMITTED_QUERY:
            return action.payload
        default:
            return state
    }
}

export default setSubmittedQuery
