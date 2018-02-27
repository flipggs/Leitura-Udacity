import { get, post, deleteData } from '../Services/ReadbleAPI'

export const GET_ALL_COMMENTS_BY_POST_ID = 'GET_ALL_COMMENTS_BY_POST_ID'
export const UPDATE_SCORE_COMMENT = 'UPDATE_SCORE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const INSERT_COMMENT = 'INSERT_COMMENT'

export function getAllComments(comments) {
    return {
        type: GET_ALL_COMMENTS_BY_POST_ID,
        comments
    }
}

export function insertComment(comment) {
    return {
        type: INSERT_COMMENT,
        comment
    }
}

export function updateComment(comment) {
    return {
        type: UPDATE_SCORE_COMMENT,
        comment
    }
}

export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}

export function getCommentsByPostId(postId) {
    return (dispatch) => {
        get(`/posts/${postId}/comments`)
            .then(res => dispatch(getAllComments(res.data)))
            .catch((e) => console.log('error', e))
    }
}

export function insertNewComment(comment) {
    return (dispatch) => {
        post('/comments', comment)
            .then(res => res.data)
            .then(data => dispatch(insertComment(data)))
            .catch(e => console.log('error insertNewComment', e))
    }
}

export function updateScoreComment(commentId, option) {
    const url = `/comments/${commentId}`

    return (dispatch) => {
        post(url, { option })
            .then(res => res.data)
            .then(data => dispatch(updateComment(data)))
            .catch(e => console.log('error updateScoreComment', e))
    }
}

export function deleteCommentById(commentId) {
    const url = `/comments/${commentId}`

    return (dispatch) => {
        deleteData(url, {})
            .then(res => res.data)
            .then(data => dispatch(deleteComment(data)))
            .catch(e => console.log('error deleteCommentById', e))
    }
}