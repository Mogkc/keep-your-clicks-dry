import React, { Component } from 'react';
import ScoreBar from "./components/Scorebar";
import Image from "./components/Image";
import './App.css';

class App extends Component {
  state = {
    images: [],
    score: 0,
    highScore: 0
  }

  render() {
    return (
      <ScoreBar score={this.state.score} highScore={this.state.highScore} />
    );
  }
}

export default App;
