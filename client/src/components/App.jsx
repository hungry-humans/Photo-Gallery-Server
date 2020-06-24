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
      active_id : 0
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
      <div>
        {/* {this.getPhotos()} */}
        <Header photos={this.state.photos} active_id={this.state.active_id}/>
        <a className="prev" onClick={(event) => {this.setState({active_id : this.state.active_id === 0? this.state.photos.length - 1: this.state.active_id-1})}}>&#10094;</a>
        <a className="next" onClick={(event) => {this.setState({active_id : this.state.active_id === this.state.photos.length-1 ? 0 : this.state.active_id+1})}}>&#10095;</a>
      </div>
    )
  }
}

export default App;