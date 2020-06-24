import React from 'react';
import App from './App.jsx';
import samplePhotos from '../samplePhotos.js'
var ind = 0;

const Header = (props) => (

  <div className="slideshow-container row">
    {props.photos.map(photo => <div className='mySlides fade column' style={{'display': photo.businessId >= props.active_id && photo.businessId < props.active_id + props.window_size  ? 'block' : 'none'}}  key={photo._id}><img src={photo.thumbnail}></img></div>)}

  </div>

)
export default Header;

