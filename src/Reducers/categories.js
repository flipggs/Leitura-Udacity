import {
    CATEGORIES_SUCCESS
} from '../Actions/categories'

export function categories(state = {}, action) {
    switch (action.type) {
        case CATEGORIES_SUCCESS:
            const { recipe } = action

            return {
                ...state,
                [recipe.label]: recipe
            }
        default:
            return state
    }
}

