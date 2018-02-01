import { get } from '../Services/ReadbleAPI'

export const GET_ALL_COMMENTS_BY_POST_ID = 'GET_ALL_COMMENTS_BY_POST_ID'


export function getAllComments(comments) {
    return {
        type: GET_ALL_COMMENTS_BY_POST_ID,
        comments
    }
}

export function getCommentsByPostId(postId) {
    return (dispatch) => {
        get(`/posts/${postId}/comments`)
            .then(res => dispatch(getAllComments(res.data)))
            .catch((e) => console.log('error', e))
    }
}