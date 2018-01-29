import { get } from '../Services/ReadbleAPI'

export const CATEGORIES_IS_LOADING = 'CATEGORIES_IS_LOADING'
export const CATEGORIES_HAS_ERRORED = 'CATEGORIES_HAS_ERRORED'
export const CATEGORIES_FETCH_DATA_SUCCESS = 'CATEGORIES_FETCH_DATA_SUCCESS'

export function categoriesIsLoading(bool) {
  return {
    type: CATEGORIES_IS_LOADING,
    isLoading: bool
  }
}

export function categoriesHasErrored(bool) {
  return {
    type: CATEGORIES_HAS_ERRORED,
    hasErrored: bool
  }
}

export function categoriesFetchDataSuccess(categories) {
  return {
    type: CATEGORIES_FETCH_DATA_SUCCESS,
    categories
  }
}


export function categoriesFetchData() {
  
  return (dispatch) => {
    dispatch(categoriesIsLoading(true))
    get('/categories')
      .then(res => {
        dispatch(categoriesIsLoading(false))
        return res.data
      })
      .then(data => {
        return dispatch(categoriesFetchDataSuccess(data.categories))
      })
      .catch((e) => {
        console.log('error', e)
        return dispatch(categoriesHasErrored(true))
      })
  }
}