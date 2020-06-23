import React from 'react';
import axios from 'axios';
import samplePhotos from '../samplePhotos.js';
import Header from './Header.jsx';

var requestedOnce = false;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos : samplePhotos,
      currentPhoto : samplePhotos[1],
    }
    this.getPhotos = this.getPhotos.bind(this);
  }


  componentDidMount() {
    this.getPhotos()
  }

  getPhotos() {
    if (requestedOnce) {
      return
    }
    requestedOnce = true;
    axios.get('/header')
    .then((response) => {
      console.log('REQUEST')
      this.setState({photos: response.data})
      // handle success
      // console.log('response', response[0]);
    })
    .catch((error) => {
      // handle error
      console.log('error', error);
    });
  }

  render () {
    return (
      <div className="mySlides">
        {/* {this.getPhotos()} */}
        <Header photos={this.state.photos}/>
      </div>
    )
  }
}

export default App;