import React, { Component } from 'react';

class ScoreBar extends Component {
    render() {
        return (
            <p>
                Current Score: {this.props.score} | 
                Highscore: {this.props.highScore}
            </p>
        );
    }
}

export default ScoreBar;