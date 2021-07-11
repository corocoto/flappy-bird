import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Menu from './containers/Menu';
import Poster from './components/Poster';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Poster/>
        <Menu/>
      </div>
    </BrowserRouter>
  );
}

export default App;
