import React from "react";

// Libs
import renderer from "react-test-renderer";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

// Components
import App from "./App";

// Constants
import testAttributes from "./testAttributes";

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  })

  it('should renders correctly', () => {
    const tree = renderer
      .create(<App/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders component',  () => {
    expect(
      screen.getByTestId(testAttributes.APP_COMPONENT)
    ).toBeInTheDocument();
  });

  it('should contains <Poster /> component', () => {
    expect(
      screen.getByTestId(testAttributes.POSTER_COMPONENT)
    ).toBeInTheDocument();
  });

  it('should contains <Menu /> component', () => {
    expect(
      screen.getByTestId(testAttributes.MENU_COMPONENT)
    )
  });
});

