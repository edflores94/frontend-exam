import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div>
    <Menu/>
    <div className="App">
      <header className="App-header">
        {<img src={logo} className="App-logo" alt="logo" />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know more about React
        </a>
        <Button href="https://reactjs.org"
          target="_blank" color="danger">Learn</Button>
      </header>
    </div>
    </div>
  );
}

export default App;
