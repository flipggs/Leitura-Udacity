import {
    GET_ALL_COMMENTS_BY_POST_ID
} from '../Actions/comments'


export function comments(state = [], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS_BY_POST_ID:
            return action.comments
        default:
            return state
    }
}
