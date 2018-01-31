import React, { Component } from 'react';

class VoteScore extends Component {
    state = {
        score: 0
    }

    componentDidMount() {
        this.setState({ score: this.props.score })
    }

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
        return (
            <div>
                <span>
                    Score:
                </span>
                <button onClick={() => this.sumScore()}>
                    +
                </button>
                <span>
                    {this.state.score}
                </span>
                <button onClick={() => this.subtractScore()}>
                    -
                </button>
            </div>
        )
    }
}

export default VoteScore