import {
    GET_ALL_CATEGORIES,
    LOADING_CATEGORY
} from '../Actions/categories'

export function category_loading(state = false, action) {
    switch (action.type) {
        case LOADING_CATEGORY:
            return action.isLoading
        default:
            return state
    }
}

export function categories(state = [], action) {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return action.categories
        default:
            return state
    }
}
