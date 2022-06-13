// Libs
import React from "react";
import {BrowserRouter} from "react-router-dom";

import renderer from "react-test-renderer";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Components
import MenuWithRouter, {Menu} from "./Menu";

// Constants
import testAttributes from "../../testAttributes";
import TEST_ATTRIBUTES from "../../testAttributes";

const props = {
  history: {
    goBack: jest.fn(),
    location: {
      pathname: '/'
    }
  },
};

describe('<Menu>', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Menu {...props}/>
      </BrowserRouter>
    )
  });

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

  it('should "Back" button hidden', () => {
    const backButton = screen.getByTestId(testAttributes.BACK_BUTTON);
    expect(backButton).toHaveAttribute('hidden');
  });

  it('should license link linked on the "https://github.com/corocoto/flappy-bird/blob/master/LICENSE" URL', () => {
    expect(screen.getByTestId(TEST_ATTRIBUTES.LICENSE_LINK)).toHaveAttribute('href', 'https://github.com/corocoto/flappy-bird/blob/master/LICENSE');
  });

  it('should repo link lined on the "https://github.com/corocoto/flappy-bird" URL', () => {
    expect(screen.getByTestId(TEST_ATTRIBUTES.REPO_LINK)).toHaveAttribute('href', 'https://github.com/corocoto/flappy-bird')
  });
});
