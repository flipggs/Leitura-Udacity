import React from 'react'
import Comment from './../Comment'

const ListComments = (props) => {
    const { comments } = props || []
    return (
        <div>
            <h3>Comentários</h3>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}

            {comments.length === 0 && (<h3>Nenhum comentário encontrado</h3>)}
        </div>
    )
}

export default ListComments