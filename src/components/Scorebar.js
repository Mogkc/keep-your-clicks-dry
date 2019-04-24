import React, { Component } from 'react';

class ScoreBar extends Component {
    render() {
        return (
            <p>
                Current Score: {this.props.score} |
                Highscore: {this.props.highScore} |
                Max Possible Score: {this.props.max}
            </p>
        );
    }
}

export default ScoreBar;