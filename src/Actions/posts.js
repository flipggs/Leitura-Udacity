import { get } from '../Services/ReadbleAPI'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_POSTS_BY_CATEGORY = 'GET_ALL_POSTS_BY_CATEGORY'

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