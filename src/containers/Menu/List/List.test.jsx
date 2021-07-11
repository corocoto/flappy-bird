import React from "react";
import List from "./List";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

describe('<List />', () => {
  test('should renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <List />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
