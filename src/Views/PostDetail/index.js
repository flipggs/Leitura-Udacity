import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPostById } from '../../Actions/posts'
import VoteScore from './../../Components/VoteScore'

class PostDetail extends Component {

    componentDidMount() {
        const { match = {} } = this.props
        const { params = {} } = match
        const postId = params.post_id
        this.props.getData(postId)
    }

    render() {
        const { post } = this.props

        return (
            <div>
                <h1>
                    {post.title}
                </h1>
                <span>
                    {post.author} - {post.category}
                </span>

                {post.voteScore && (
                    <VoteScore score={post.voteScore} />
                )}


                <article>
                    {post.body}
                </article>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: (postId) => dispatch(getPostById(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)