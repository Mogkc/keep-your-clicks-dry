import React, { Component } from 'react';
import ScoreBar from "./components/Scorebar";
import Image from "./components/Image";
import './App.css';

class App extends Component {
  state = {
    images: [
      { src: "https://http.cat/404", alt: "Not Found", clicked: false },
      { src: "https://http.cat/200", alt: "OK", clicked: false },
      { src: "https://http.cat/500", alt: "Server Error", clicked: false },
      { src: "https://http.cat/300", alt: "Multiple Choices", clicked: false }
    ],
    score: 0,
    highScore: 0
  }

  componentDidMount() {
    this.randomizeImages();
  }

  randomizeImages = () => {
    // Variables we need to randomize the array
    const randomized = [];
    // Slots is the number of empty spots left in the array
    let slots = this.state.images.length;
    this.state.images.forEach(img => {
      // Place is the number of empty spots that are passed over
      let index = 0, place = Math.floor(Math.random() * slots);

      while (place > 0 || randomized[index]) {
        // Only decreace place when passing over an availible spot in randomized
        if (!randomized[index]) place--;
        // Always increace the index where the image will be pushed
        index++;
      }
      randomized[index] = img;
      slots--;
    });


    this.setState({ images: randomized });
  }

  firstClick = (src) => {
    this.setState({
      score: this.state.score + 1,
      images: this.state.images.map(img => {
        if (img.src === src) img.clicked = true;
        return img;
      })
    });
    this.randomizeImages();
  }

  handleLoss = () => {
    // Reset state.images, then
    return (this.state.score > this.state.highScore) ?
      this.setState({ highScore: this.state.score, score: 0 }) :
      this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <ScoreBar score={this.state.score} highScore={this.state.highScore} />
        {this.state.images.map(img =>
          <Image image={img} clickFunction={img.clicked ? this.handleLoss : this.firstClick} />
        )}
      </div>
    );
  }
}

export default App;
