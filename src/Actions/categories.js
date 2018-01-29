import { get } from '../Services/ReadbleAPI'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'


export function getAllCategories(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
}

export function getCategories() {
  
  return (dispatch) => {
    get('/categories')
      .then(res => {
        return res.data
      })
      .then(data => {
        return dispatch(getAllCategories(data.categories))
      })
      .catch((e) => {
        console.log('error', e)
      })
  }
}