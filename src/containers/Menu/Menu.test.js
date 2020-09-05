import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Menu} from './Menu';

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
    describe('testing Back <button>', () => {
        it('should hidden if open in the main page', () => expect(wrapper.find('button').prop('hidden')).toEqual(true));
        it('shouldn\'t be hidden if open in author page', () => {
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
        it('should has event listener for click', ()=> {
            expect(wrapper.find('button').prop('onClick')()).toEqual(props.history.goBack());
        })
    })
});
