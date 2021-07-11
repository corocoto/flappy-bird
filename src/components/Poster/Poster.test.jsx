import React from 'react';
import renderer from 'react-test-renderer';
import Poster from './Poster';

it('Poster component renders correctly', () => {
  const tree = renderer
    .create(<Poster/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
