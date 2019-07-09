import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <h3 className='justify-content-center'>Welcome to Don't Forget! The goal of this game is to click each picture only one time. Each time you click on a picture that has not been clicked, your score will increase. Once you click an image twice, you lose! (The highest possible score is 10)</h3>
          </div>
          <div className='row justify-content-center'>
            <div id='score-div'>
              <p>Score: <span id='score-display'>{this.props.score}</span></p>
            </div>
            <div id='high-score-div'>
              <p>High Score: <span id='high-score-display'>{this.props.highScore}</span></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header;