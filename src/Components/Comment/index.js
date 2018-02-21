import React from 'react';
import VoteScore from './../VoteScore';

import './comments.css'

const Comment = (props) => {

    const { author, body, voteScore } = props.comment

    return (
        <section className="comment">
            <span>
                <b>by:</b> {author}</span>
            <div>{body}</div>
            <VoteScore score={voteScore} />
        </section>
    )
}

export default Comment