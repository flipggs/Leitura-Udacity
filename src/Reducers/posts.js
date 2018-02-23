import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_BY_CATEGORY,
    GET_POST,
    INSERT_POST,
    UPDATE_POST
} from '../Actions/posts'

export function posts(state = [], action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.posts
        case GET_ALL_POSTS_BY_CATEGORY:
            return action.posts
        case INSERT_POST:
            const newState = state.concat(action.post)
            return newState
        case UPDATE_POST:
            return state.map(post => {
                if (post.id === action.post.id)
                    return action.post
                return post
            })
        default:
            return state
    }
}

export function post(state = {}, action) {
    switch (action.type) {
        case GET_POST:
            return action.post
        case UPDATE_POST:
            return action.post
        default:
            return state
    }
}
