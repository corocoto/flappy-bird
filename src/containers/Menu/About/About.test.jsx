import React from "react";
import About from "./About";
import renderer from "react-test-renderer";

describe('<About />', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
