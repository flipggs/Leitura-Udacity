import { get, post } from '../Services/ReadbleAPI'

export const GET_ALL_COMMENTS_BY_POST_ID = 'GET_ALL_COMMENTS_BY_POST_ID'
export const INSERT_UPDATE_COMMENT = 'INSERT_UPDATE_COMMENT'

export function getAllComments(comments) {
    return {
        type: GET_ALL_COMMENTS_BY_POST_ID,
        comments
    }
}

export function insertUpdateComment(comment) {
    return {
        type: INSERT_UPDATE_COMMENT,
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

export function updateScoreComment(commentId, option) {
    const url = `/comments/${commentId}`

    return (dispatch) => {
        post(url, { option })
            .then(res => res.data)
            .then(data => dispatch(insertUpdateComment(data)))
            .catch(e => console.log('error updateScoreComment', e))
    }
}