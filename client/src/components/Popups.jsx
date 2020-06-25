import React from 'react';
import ReactDom from 'react-dom';

class Popups extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="modal" id="modal">
        <div className="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
        </div>
        <div className="side">
          <h2>Resturant name</h2>
          <h5>All photos</h5>
          <div className="fakeimg">Image</div>
          <div className="fakeimg">Image</div>
          <div className="fakeimg">Image</div>
          <button>See all photos</button>
        </div>
        <div id="overlay"></div>
        <div className="footer">
          <h2>Footer</h2>
          <img className="icon1" src="https://hungryhumans.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-24+at+7.48.22+PM.png"></img>
          <button>HelpFul</button>
          <button>NotHelpfull</button>
        </div>
      </div>
    )
  }
}

export default Popups;


