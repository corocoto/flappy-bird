import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenuWithRouter, {Menu} from "./Menu";

configure({adapter: new Adapter()});

describe('<Menu>', () => {
  const props = {
    history: {
      goBack: jest.fn(),
      location: {
        pathname: '/'
      }
    },
  }
  let wrapper;
  beforeEach(() => wrapper = shallow(<Menu {...props}/>));

  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MenuWithRouter/>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('testing Back <button>', () => {
    it('should hidden if open in the main page', () => expect(wrapper.find('button').prop('hidden')).toEqual(true));
    it('shouldn\'t be hidden if open the author page', () => {
      wrapper.setProps({
        history: {
          goBack: jest.fn(),
          location: {
            pathname: '/author'
          }
        }
      });
      expect(wrapper.find('button').prop('hidden')).toEqual(false);
    });
    it('should has event listener that running goBack prop function when click on button', () => {
      expect(wrapper.find('button').prop('onClick')()).toEqual(props.history.goBack());
    })
  })
});
