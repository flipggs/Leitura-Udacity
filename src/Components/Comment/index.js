import React from 'react'
import { connect } from 'react-redux'

import VoteScore from './../VoteScore'

import './comments.css'
import { updateScoreComment } from '../../Actions/comments'

const Comment = (props) => {
    const { author, body, voteScore, id } = props.comment

    const onClickVoteScore = (voteType) => {
        props.updateComment(id, voteType)
    }

    return (
        <section className="comment">
            <span>
                <b>by:</b> {author}</span>
            <div>{body}</div>
            <VoteScore score={voteScore} onClickVoteScore={onClickVoteScore} />
        </section>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    updateComment: (id, option) => dispatch(updateScoreComment(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)