import {
    GET_ALL_CATEGORIES
} from '../Actions/categories'


export function categories(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.categories
        default:
            return state
    }
}
