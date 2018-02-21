import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPostById } from '../../Actions/posts'
import { getCommentsByPostId } from '../../Actions/comments'

import VoteScore from './../../Components/VoteScore'
import ListComments from './../../Components/ListComments'

class PostDetail extends Component {

    componentDidMount() {
        const { match = {} } = this.props
        const { params = {} } = match
        const postId = params.post_id
        this.props.getData(postId)
        this.props.getComments(postId)
    }

    onClickVoteScore = (voteType) => {

        const { id } = this.props.postData
        this.props.updatePost(id, voteType)

        this.setState(prev => {
            const voteScore = voteType === 'upVote' ? prev.voteScore + 1 : prev.voteScore - 1
            return { voteScore }
        })

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

                <ListComments comments={comments} />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.post,
    comments: state.comments
})

const mapDispatchToProps = (dispatch) => ({
    getData: (postId) => dispatch(getPostById(postId)),
    getComments: (postId) => dispatch(getCommentsByPostId(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)