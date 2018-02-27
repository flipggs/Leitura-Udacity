import {
    GET_ALL_COMMENTS_BY_POST_ID,
    INSERT_COMMENT,
    UPDATE_SCORE_COMMENT,
    DELETE_COMMENT
} from '../Actions/comments'


export function comments(state = [], action) {
    switch (action.type) {
        case GET_ALL_COMMENTS_BY_POST_ID:
            return action.comments
        case INSERT_COMMENT:
            const newState = state.concat(action.comment)
            return newState
        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.comment.id)
        case UPDATE_SCORE_COMMENT:
            return state.map(comment => {
                if (comment.id === action.comment.id)
                    return action.comment
                return comment
            })
        default:
            return state
    }
}
