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

{/* <div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */}