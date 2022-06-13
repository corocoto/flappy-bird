// Libs
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Styles
import './App.css';

// Components
import Menu from './containers/Menu';
import Poster from './components/Poster';

// Constants
import testAttributes from "./testAttributes";

function App() {
  return (
    <BrowserRouter>
      <div className="App" data-testid={testAttributes.APP_COMPONENT}>
        <Poster/>
        <Menu/>
      </div>
    </BrowserRouter>
  );
}

export default App;
