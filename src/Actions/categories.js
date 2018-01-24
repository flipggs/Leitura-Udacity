import { get } from '../Services/ReadbleAPI'

export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR'

export function categoriesSuccess(categories) {
    return {
        type: CATEGORIES_SUCCESS,
        categories
    }
}

export function categoriesError(bool) {
    return {
        type: CATEGORIES_ERROR,
        hasErrored: bool
    }
}

export function getCategories() {

    return (dispatch) => {

        get('/categories')
            .then(res => {
                console.log('res', res)
                return res.data
            })
            .then(categories => {

                return dispatch(categoriesSuccess(categories))
            })
            .catch(() => dispatch(categoriesError(true)))
    }
}