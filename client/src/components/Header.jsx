import React from 'react';
import App from './App.jsx';
import samplePhotos from '../samplePhotos.js'

const Header = (props) => (
  <div className="column">
    {props.photos.map(photo => <img src={photo.thumbnail}></img>)}
  </div>
)
export default Header;