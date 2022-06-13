// Libs
import React from 'react';
import renderer from 'react-test-renderer';

// Components
import Poster from './Poster';

describe('<Poster />', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<Poster/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

