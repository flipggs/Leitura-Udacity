import { get } from '../Services/ReadbleAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const LOADING_CATEGORY = 'LOADING_CATEGORY'

export function category_loading(isLoading) {
  return {
    type: LOADING_CATEGORY,
    isLoading
  }
}

export function getAllCategories(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export function getCategories() {

  return (dispatch) => {
    dispatch(category_loading(true))
    get('/categories')
      .then(res => {
        return res.data
      })
      .then(data => {
        dispatch(category_loading(false))
        return dispatch(getAllCategories(data.categories))
      })
      .catch((e) => {
        console.log('error', e)
      })
  }
}