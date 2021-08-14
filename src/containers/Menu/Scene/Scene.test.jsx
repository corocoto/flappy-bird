import React from "react";
import renderer from "react-test-renderer";
import Scene from "./Scene";

describe('<Scene />', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<Scene/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

