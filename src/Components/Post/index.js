import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import VoteScore from './../VoteScore'
import { updateScorePost, deleteByPostId } from '../../Actions/posts'

class Post extends Component {

    onClickVoteScore = (voteType) => {

        const { id } = this.props.postData
        this.props.updatePost(id, voteType)
    }

    onClickDelete = () => {
        const { id } = this.props.postData
        this.props.deletePost(id)
    }

    render() {
        const { author, title, category, id, commentCount } = this.props.postData
        const { voteScore } = this.props.postData || 0

        return (
            <div>
                <h3>
                    <Link to={`/${category}/${id}`}>
                        {title}
                    </Link>
                </h3>
                <span>
                    <b>by:</b> {author}
                </span>
                <VoteScore score={voteScore} onClickVoteScore={this.onClickVoteScore} />
                <span>
                    {commentCount} Comentários
                </span>
                <div>
                    <Link to={`/edit-post/${id}`}>
                        Editar
                    </Link>

                    <button onClick={() => this.onClickDelete()}>
                        Remover
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id, option) => dispatch(updateScorePost(id, option)),
        deletePost: (id) => dispatch(deleteByPostId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)