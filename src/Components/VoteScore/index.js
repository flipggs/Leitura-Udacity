import React from 'react';

const VoteScore = (props) => {
    const { score, onClickVoteScore } = props

    return (
        <div>
            <span>
                Score:
                </span>
            <button onClick={() => onClickVoteScore('upVote')}>
                +
                </button>
            <span>
                {score}
            </span>
            <button onClick={() => onClickVoteScore('downVote')}>
                -
                </button>
        </div>
    )
}

export default VoteScore