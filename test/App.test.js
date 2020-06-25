import App from '../client/src/components/App';
import Header from '../client/src/components/Header';
import Popups from '../client/src/components/Popups'
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

const test_photos = [{
    _id : '5eeda69f3d14f290dc5919ea',
    businessId : 0,
    title : 'Towne - Hudson',
    imageUrl : 'https://source.unsplash.com/1600x900/?burger',
    thumbnail : 'https://hungryhumans.s3-us-west-1.amazonaws.com/258s%20(2).jpg',
    createdAt : '2020-06-20T03:34:15.329Z',
    username : 'Augustus Johnson',
    __v : 0
  },
  {
    _id : '5eeda69f3d14f290dc5919eb',
    businessId : 1,
    title : 'Emard, Volkman and Hoppe',
    imageUrl : 'https://source.unsplash.com/1600x900/?burger',
    thumbnail : 'https://hungryhumans.s3-us-west-1.amazonaws.com/258s%20(3).jpg',
    createdAt : '2020-06-19T08:32:12.242Z',
    username : 'Gustave Hills',
    __v : 0
  }
];

describe('<App /> rendering', () => {
    let wrapper = shallow(<App />);
    it('should render <Header>', () => {
        expect(wrapper.find("Header").exists()).to.equal(true);
    });
});


describe('<App />', () => {
    it('renders one <Popups /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Popups)).to.have.lengthOf(1);
    });

    it('renders an `.next`', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.next')).to.have.lengthOf(1);
    });

    it('renders children when passed in', () => {
      const wrapper = shallow((
        <App/>
      ));
      console.log(wrapper.debug());
      expect(wrapper.contains(<div className="popups"><Popups /></div>)).to.equal(true);
    });

// //     // it('simulates click events', () => {
// //     //   const onButtonClick = sinon.spy();
// //     //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
// //     //   wrapper.find('button').simulate('click');
// //     //   expect(onButtonClick).to.have.property('callCount', 1);
// //     // });

    // it('simulates click events', () => {
    //   const onButtonClick = sinon.spy(App, "nextHandler");
    //   const wrapper = shallow(<App onButtonClick={onButtonClick} photos={test_photos} window_size={1} active_id={0} />);
    //   expect(wrapper.props().active_id).to.equal(0);
    //   wrapper.find('.next').simulate('click');
    //   expect(wrapper.props().active_id).to.equal(1);
    // });
  });



describe('<Header />', () => {
    it('allows us to set props', () => {
      const wrapper = mount(<Header photos={test_photos} window_size={4}/>);
      expect(wrapper.props().window_size).to.equal(4);

      wrapper.setProps({ window_size: 6 });
      expect(wrapper.props().window_size).to.equal(6);
    });

//     // it('simulates click events', () => {
//     //   const onButtonClick = sinon.spy();
//     //   const wrapper = mount((
//     //     <Foo onButtonClick={onButtonClick} />
//     //   ));
//     //   wrapper.find('button').simulate('click');
//     //   expect(onButtonClick).to.have.property('callCount', 1);
//     // });

    // it('calls componentDidMount', () => {
    //   sinon.spy(App.prototype, 'componentDidMount');
    //   const wrapper = mount(<App />);
    //   expect(App.prototype.componentDidMount).to.have.property('getPhotos', 1);
    //   App.prototype.componentDidMount.restore();
    // });
  });