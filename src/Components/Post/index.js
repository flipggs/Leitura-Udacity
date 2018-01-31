import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VoteScore from './../VoteScore'

class Post extends Component {

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
                    Author: {author}
                </span>
                <VoteScore score={voteScore} />
            </div>
        )
    }
}

export default Post