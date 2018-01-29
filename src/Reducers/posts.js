import {
    GET_ALL_POSTS
} from '../Actions/posts'


export function posts(state = [], action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.posts
        default:
            return state
    }
}
