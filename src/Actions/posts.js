import { get, post } from '../Services/ReadbleAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_POSTS_BY_CATEGORY = 'GET_ALL_POSTS_BY_CATEGORY'
export const GET_POST = 'GET_POST'
export const INSERT_UPDATE_POST = 'INSERT_UPDATE_POST'

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

export function insertUpdatePost(post){
	return {
		type: INSERT_UPDATE_POST,
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

export function updateScorePost(postId, option) {
  const url = `/posts/${postId}`
  
return (dispatch) => {    
	post(url, { option })
      .then(res => res.data)
	  .then(data => dispatch(insertUpdatePost(data)))
      .catch(e => console.log('error updateScorePost', e))
}
}