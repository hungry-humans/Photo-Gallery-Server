import App from '../client/src/components/App';

describe('<App /> rendering', () => {
    let wrapper = shallow(<App />);
    it('should render <Header>', () => {
        expect(wrapper.find("Header").exists()).toBe(true);
    });
});