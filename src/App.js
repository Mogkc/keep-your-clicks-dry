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

  randomizeImages = () => {
    // To be implemented after images component is fleshed out
  }

  firstClick = () => {
    randomizeImages();
    this.setState({ score = this.state.score + 1 });
  }

  handleLoss = () => {
    randomizeImages();
    return (this.state.score > this.state.highScore) ?
      setState({ highScore: this.state.score, score: 0 }) :
      setState({ score: 0 });
  }

  render() {
    return (
      <ScoreBar score={this.state.score} highScore={this.state.highScore} />
    );
  }
}

export default App;
