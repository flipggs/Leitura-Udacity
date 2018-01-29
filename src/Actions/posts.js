import { get } from '../Services/ReadbleAPI'

export const POSTS_IS_LOADING = 'POSTS_IS_LOADING'
export const POSTS_HAS_ERRORED = 'POSTS_HAS_ERRORED'
export const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS'

export function postsIsLoading(bool) {
  return {
    type: POSTS_IS_LOADING,
    isLoading: bool
  }
}

export function postsHasErrored(bool) {
  return {
    type: POSTS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_DATA_SUCCESS,
    posts
  }
}


export function postsFetchData() {
  
  return (dispatch) => {
    dispatch(postsIsLoading(true))
    get('/posts')
      .then(res => {
        dispatch(postsIsLoading(false))
        return res.data
      })
      .then(data => {    
          console.log('data', data)      
        return dispatch(postsFetchDataSuccess(data))
      })
      .catch((e) => {
        console.log('error', e)
        return dispatch(postsHasErrored(true))
      })
  }
}