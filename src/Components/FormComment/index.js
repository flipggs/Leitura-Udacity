import React from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import uuidv1 from 'uuid/v1'

import './formComment.css'

import { insertNewComment } from '../../Actions/comments'

const FormComment = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })

        const comment = {
            parentId: props.postId,
            id: uuidv1(),
            timestamp: Date.now(),
            ...values
        }

        props.insertComment(comment)
    }

    return (
        <form className="form-comment" onSubmit={handleSubmit}>
            <span> Novo Comentário </span>
            <input type="text" placeholder="Autor" id="author" name="author" />
            <textarea id="body" name="body" placeholder="Conteúdo" />
            <input type="submit" value="Salvar" />
        </form>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    insertComment: (comment) => dispatch(insertNewComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormComment)
