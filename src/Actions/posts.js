import { get, post, deleteData, put } from '../Services/ReadbleAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_POSTS_BY_CATEGORY = 'GET_ALL_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'
export const INSERT_POST = 'INSERT_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_SCORE_POST = 'UPDATE_SCORE_POST'
export const DELETE_POST = 'DELETE_POST'

export function getAllPosts(posts) {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export function getAllPostsByCategory(posts) {
  return {
    type: GET_ALL_POSTS_BY_CATEGORY,
    posts
  }
}

export function getPost(post) {
  return {
    type: GET_POST,
    post
  }
}

export function updatePost(post) {
  return {
    type: UPDATE_SCORE_POST,
    post
  }
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post
  }
}

export function updateFecthPost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export function insertPost(post) {
  return {
    type: INSERT_POST,
    post
  }
}

export function getPosts(category) {

  let url = '/posts'
  if (category)
    url = `/${category}${url}`

  return (dispatch) => {
    get(url)
      .then(res => res.data)
      .then(data => dispatch(getAllPostsByCategory(data)))
      .catch((e) => {
        console.log('error', e)
      })
  }
}

export function getPostById(postId) {
  return (dispatch) => {
    get(`/posts/${postId}`)
      .then(res => res.data)
      .then(data => dispatch(getPost(data)))
      .catch(e => console.log('error getPostById', e))
  }
}

export function insertNewPost(newPost) {
  return (dispatch) => {
    post('/posts', newPost)
      .then(res => res.data)
      .then(data =>
        dispatch(insertPost({
          ...newPost,
          ...data
        }))
      )
      .catch(e => console.log('error updateScorePost', e))
  }
}

export function updateScorePost(postId, option) {
  const url = `/posts/${postId}`

  return (dispatch) => {
    post(url, { option })
      .then(res => res.data)
      .then(data => dispatch(updatePost(data)))
      .catch(e => console.log('error updateScorePost', e))
  }
}

export function deleteByPostId(postId) {
  const url = `/posts/${postId}`

  return (dispatch) => {
    deleteData(url, {})
      .then(res => res.data)
      .then(data => dispatch(deletePost(data)))
      .catch(e => console.log('error deleteByPostId', e))
  }
}

export function fecthUpdatePost(post, postId) {
  const url = `/posts/${postId}`
  return (dispatch) => {
    put(url, post)
      .then(res => res.data)
      .then(data => dispatch(updateFecthPost(data)))
      .catch(e => console.log('error fecthUpdatePost', e))
  }
}