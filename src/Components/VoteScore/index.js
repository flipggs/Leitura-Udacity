import React, { Component } from 'react';

class VoteScore extends Component {
    
    sumScore = () => {
        this.setState((prevState, state) => {
            return { score: prevState.score + 1 }
        })
    }
    
    subtractScore = () => {
        this.setState((prevState, state) => {
            return { score: prevState.score - 1 }
        })
    }

    render() {
		
	const {score, onClickVoteScore} = this.props
		
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
}

export default VoteScore