import React, { Component } from 'react';
import './style.css';
import images from '../../images.json';

class PictureList extends Component {

  state = {
    images
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  click(id) {
    this.props.handleClick(id)
    this.setState({ images: this.shuffleArray(images) })
  }

    render() {
        return (
          <>
            <div className='container'>
              <div className='row justify-content-center'>
                {this.state.images.map(image => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.src}
                    className='images'
                    onClick={e => this.click(image.id)}
                  />
                ))}
              </div>
            </div>
          </>
        )
    }
}

export default PictureList;