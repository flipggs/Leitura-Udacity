import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { If, Then } from 'react-if'

import VoteScore from '../VoteScore'
import ListComments from '../ListComments'

import { updateScorePost, deleteByPostId, getPostById } from '../../Actions/posts'
import { getCommentsByPostId, } from '../../Actions/comments'

import './post.css'

class Post extends Component {

    state = {
        showAll: false
    }

    componentDidMount() {
        const post_id = this.getPostId()
        if (post_id) {
            const { getData, getComments } = this.props
            getData(post_id)
            getComments(post_id)
            this.setState({ showAll: true })
        }
    }

    getPostId() {

        const { match = {} } = this.props
        const { params = {} } = match
        const { post_id } = params

        return post_id

    }

    onClickVoteScore = (id, voteType) => {
        this.props.updatePost(id, voteType)
    }

    onClickDelete = (id) => {
        const resultConfirm = window.confirm('Deseja realmente excluir este item')

        if (resultConfirm) {
            this.props.deletePost(id)
            const { history } = this.props

            if (history)
                history.push('/')
        }
    }

    render() {
        const { post_loading } = this.props

        if (post_loading)
            return <h1>Loading...</h1>
        else {
            let { postData } = this.props

            if (!postData)
                postData = this.props.post

            const { comments } = this.props
            const { author, title, category, body, id, commentCount, voteScore } = postData

            return (
                <div>
                    <h3>
                        <Link to={`/${category}/${id}`}>
                            {title}
                        </Link>
                    </h3>
                    <div>
                        <b>Autor:</b> {author}
                    </div>
                    <div>
                        <b>Categoria:</b> {category}
                    </div>
                    <VoteScore score={voteScore} onClickVoteScore={(voteType) => {
                        this.onClickVoteScore(id, voteType)
                    }} />
                    <span>
                        {commentCount} Comentários
             </span>
                    <div>
                        <Link to={`/edit-post/${id}`}>
                            Editar
                 </Link>

                        <button onClick={() => this.onClickDelete(id)}>
                            Remover
                 </button>
                    </div>

                    <If condition={this.state.showAll}>
                        <Then>
                            <div>
                                <article className="content-post">
                                    {body}
                                </article>

                                <ListComments postId={id} comments={comments} />
                            </div>
                        </Then>
                    </If>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ post, comments, post_loading }) => ({ post: post, comments, post_loading })

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (postId) => dispatch(getPostById(postId)),
        getComments: (postId) => dispatch(getCommentsByPostId(postId)),
        updatePost: (id, option) => dispatch(updateScorePost(id, option)),
        deletePost: (id) => dispatch(deleteByPostId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)