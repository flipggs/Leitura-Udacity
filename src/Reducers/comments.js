import {
    GET_ALL_COMMENTS_BY_POST_ID,
    INSERT_UPDATE_COMMENT
} from '../Actions/comments'


export function comments(state = [], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS_BY_POST_ID:
            return action.comments
        case INSERT_UPDATE_COMMENT:
            return state.map(comment => {
                if (comment.id === action.comment.id)
                    return action.comment
                return comment
            })
        default:
            return state
    }
}
