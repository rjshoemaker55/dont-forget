import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import PictureList from './components/PictureList';
import './App.css';

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    imagesClicked: []
  }

  handleClick(id) {
    console.log('Image clicked with id ' + id);

    const thisImagesClicked = this.state.imagesClicked;
    let thisScore = this.state.score;
    let thisHighScore = this.state.highScore;

    const correctClicks = thisImagesClicked.filter(image => image === id)

    if (correctClicks.length > 0) {
      console.log('Picture already clicked')

      this.setState({
        score: 0,
        imagesClicked: []
      })

    } else {

      console.log('Picture not clicked yet')

      thisImagesClicked.push(id)
      thisScore += 1

      if (thisScore > thisHighScore) {
        thisHighScore = thisScore;
      }

      this.setState({ 
        imagesClicked: thisImagesClicked, 
        score: thisScore,
        highScore: thisHighScore
      }, () => {
        console.log(`Images Clicked: ${this.state.imagesClicked}`)
        console.log(`Score: ${this.state.score}`)
      })
    }
  }

  render() {
    return (
      <>
        <Nav />
        <Header 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <PictureList 
          handleClick={this.handleClick.bind(this)}
        />
      </>
    )
  }
}

export default App;
