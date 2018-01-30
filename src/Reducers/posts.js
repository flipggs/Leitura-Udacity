import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_BY_CATEGORY
} from '../Actions/posts'


export function posts(state = [], action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.posts
        case GET_ALL_POSTS_BY_CATEGORY:
            return action.posts
        default:
            return state
    }
}
