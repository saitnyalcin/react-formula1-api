import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formula from './components/Formula';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Formula 1 Api</p>
      </header>

      <div>
        <Formula />
      </div>
    </div>
  );
}

export default App;
