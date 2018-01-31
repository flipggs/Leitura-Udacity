import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_BY_CATEGORY,
    GET_POST
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

export function post(state = [], action) {
    switch (action.type) {
        case GET_POST:
            return action.post
        default:
            return state
    }
}
