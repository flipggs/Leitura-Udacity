import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import VoteScore from './../VoteScore'
import {updateScorePost} from '../../Actions/posts'

class Post extends Component {
	
	onClickVoteScore = (voteType) => {
		
		const { id } = this.props.postData
		this.props.updatePost(id, voteType)
	}

    render() {
        const { author, title, voteScore, category, id } = this.props.postData
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id, option) => {
            return dispatch(updateScorePost(id, option))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)