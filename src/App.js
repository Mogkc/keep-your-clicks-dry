import React, { Component } from 'react';
import ScoreBar from "./components/Scorebar";
import Image from "./components/Image";
import './App.css';

class App extends Component {
  state = {
    images: [{ src: "http.cat/404", alt: "not found", clicked: false }],
    score: 0,
    highScore: 0
  }

  randomizeImages = () => {
    // To be implemented after images component is fleshed out
  }

  firstClick = (src) => {
    this.randomizeImages();
    this.setState({
      score: this.state.score + 1,
      images: this.state.images.map(img => {
        (img.src === src) ? img.clicked = true : img.clicked = false;
        return img;
      })
    });
  }

  handleLoss = () => {
    // Reset state.images, then
    this.randomizeImages();
    return (this.state.score > this.state.highScore) ?
      this.setState({ highScore: this.state.score, score: 0 }) :
      this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <ScoreBar score={this.state.score} highScore={this.state.highScore} />
        {this.state.images.map(img =>
          <Image image={img} clickFunction={(img.clicked) ? this.handleLoss : this.firstClick} />
        )}
      </div>
    );
  }
}

export default App;
