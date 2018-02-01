import React from 'react';
import VoteScore from './../VoteScore';

const Comment = (props) => {

    const { author, body, voteScore } = props.comment

    return (
        <div>
            <section>
                <span>by: {author}</span>
                <div>{body}</div>
                <VoteScore score={voteScore} />
            </section>
        </div>
    )
}

export default Comment