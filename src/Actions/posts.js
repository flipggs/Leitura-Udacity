import { get } from '../Services/ReadbleAPI'

export const GET_ALL_POSTS = 'POSTS_FETCH_DATA_SUCCESS'

export function getAllPosts(posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export function getPosts() {
  
  return (dispatch) => {
    get('/posts')
      .then(res => {
        return res.data
      })
      .then(data => {    
        return dispatch(getAllPosts(data))
      })
      .catch((e) => {
        console.log('error', e)
      })
  }
}