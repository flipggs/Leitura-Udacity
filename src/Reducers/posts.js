import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_BY_CATEGORY,
    GET_POST,
    INSERT_POST,
    UPDATE_POST,
    UPDATE_SCORE_POST,
    DELETE_POST,
    LOADING_POST,
    SUCCESS_POST
} from '../Actions/posts'

export function post_loading(state = false, action) {
    switch (action.type) {
        case LOADING_POST:
            return action.isLoading
        default:
            return state
    }
}
export function post_success(state = false, action) {
    switch (action.type) {
        case SUCCESS_POST:
            return action.isSuccess
        default:
            return state
    }
}

export function posts(state = [], action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.posts
        case GET_ALL_POSTS_BY_CATEGORY:
            return action.posts
        case INSERT_POST:
            const newState = state.concat(action.post)
            return newState
        case DELETE_POST:
            return state.filter(post => post.id !== action.post.id)
        case UPDATE_SCORE_POST:
            return state.map(post => {
                if (post.id === action.post.id)
                    return action.post
                return post
            })
        case UPDATE_POST:
            return state.map(post => {
                if (post.id === action.post.id) {
                    post.title = action.post.title;
                    post.body = action.post.body;
                }

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
        case UPDATE_SCORE_POST:
            return action.post
        case UPDATE_POST:
            return action.post
        case LOADING_POST:
            return state
        default:
            return state
    }
}
