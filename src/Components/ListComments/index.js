import React from 'react'
import Comment from './../Comment'

const ListComments = (props) => {
    const { comments } = props || []
    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default ListComments