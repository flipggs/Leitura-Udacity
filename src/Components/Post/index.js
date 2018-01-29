import React, { Component } from 'react'
import VoteScore from './../VoteScore/index';

class Post extends Component {

    render() {
        const { author, title, voteScore } = this.props
        return (
            <div>
                <h3>
                    {title}
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