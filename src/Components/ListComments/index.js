import React from 'react'
import Comment from './../Comment'
import FormComment from '../../Components/FormComment'

const ListComments = (props) => {
    const { comments, postId } = props || []
    
    return (
        <div>
            <h3>Comentários</h3>

            <FormComment postId={postId} />

            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}

            {comments.length === 0 && (<h3>Nenhum comentário encontrado</h3>)}
        </div>
    )
}

export default ListComments