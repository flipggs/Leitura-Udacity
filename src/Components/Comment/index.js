import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import VoteScore from './../VoteScore'

import './comments.css'
import { updateScoreComment, deleteCommentById } from '../../Actions/comments'

const Comment = (props) => {
    const { author, body, voteScore, id } = props.comment

    const onClickVoteScore = (voteType) => {
        props.updateComment(id, voteType)
    }

    const onClickDelete = () => {
        props.deleteComment(id)
    }

    return (
        <section className="comment">
            <span>
                <b>by:</b> {author}</span>
            <div>{body}</div>
            <VoteScore score={voteScore} onClickVoteScore={onClickVoteScore} />

            <Link to={`/edit-comment/${id}`}>
                Editar
                    </Link>

            <button onClick={() => onClickDelete()}>
                Remover
            </button>
        </section>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    updateComment: (id, option) => dispatch(updateScoreComment(id, option)),
    deleteComment: (id) => dispatch(deleteCommentById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)