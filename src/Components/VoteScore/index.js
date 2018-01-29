import React, { Component } from 'react';

class VoteScore extends Component {
    state = {
        score: 0
    }

    componentDidMount() {
        this.setState({ score: this.props.score })
    }

    render() {
        return (
            <div>
                <span>
                    Score:
                </span>
                <button>
                    +
                </button>
                <span>
                    {this.state.score}
                </span>
                <button>
                    -
                </button>
            </div>
        )
    }
}

export default VoteScore