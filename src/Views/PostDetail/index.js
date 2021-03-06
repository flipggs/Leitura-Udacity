import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPostById } from '../../Actions/posts'
import { getCommentsByPostId } from '../../Actions/comments'

import VoteScore from './../../Components/VoteScore'
import ListComments from './../../Components/ListComments'

import { updateScorePost } from '../../Actions/posts'

class PostDetail extends Component {

    componentDidMount() {
        const { match = {} } = this.props
        const { params = {} } = match
        const postId = params.post_id
        this.props.getData(postId)
        this.props.getComments(postId)
    }

    onClickVoteScore = (voteType) => {
        const { id } = this.props.post
        this.props.updatePost(id, voteType)
    }

    render() {
        const { post, comments } = this.props

        return (
            <div>
                <h1>
                    {post.title}
                </h1>
                <span>
                    {post.author} - {post.category}
                </span>

                {post.voteScore && (
                    <VoteScore score={post.voteScore} onClickVoteScore={this.onClickVoteScore} />
                )}

                <article>
                    {post.body}
                </article>

                <ListComments postId={post.id} comments={comments} />

            </div>
        )
    }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments })

const mapDispatchToProps = (dispatch) => ({
    getData: (postId) => dispatch(getPostById(postId)),
    getComments: (postId) => dispatch(getCommentsByPostId(postId)),
    updatePost: (id, option) => dispatch(updateScorePost(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)