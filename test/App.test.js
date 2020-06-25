import App from '../client/src/components/App';
// import Header from '../client/src/components/Header';

describe('<App /> rendering', () => {
    let wrapper = shallow(<App />);
    it('should render <Header>', () => {
        expect(wrapper.find("Header").exists()).toBe(true);
    });
});



// describe('<Header />', () => {
//     it('allows us to set props', () => {
//       const wrapper = mount(<Header photos="baz" />);
//       expect(wrapper.props().bar).to.equal('baz');
//       wrapper.setProps({ bar: 'foo' });
//       expect(wrapper.props().bar).to.equal('foo');
//     });

//     it('simulates click events', () => {
//       const onButtonClick = sinon.spy();
//       const wrapper = mount((
//         <Foo onButtonClick={onButtonClick} />
//       ));
//       wrapper.find('button').simulate('click');
//       expect(onButtonClick).to.have.property('callCount', 1);
//     });

//     it('calls componentDidMount', () => {
//       sinon.spy(Foo.prototype, 'componentDidMount');
//       const wrapper = mount(<Foo />);
//       expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
//       Foo.prototype.componentDidMount.restore();
//     });
//   });