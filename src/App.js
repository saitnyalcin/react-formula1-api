import React from "react";
import logo from "./images/tire.png";
import f1logo from "./images/F1_logo.png";
import "./App.css";
import Formula from "./components/Formula";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="schumi_quote">
          <q>Once something is a passion, the motivation is there</q>
        </div>
        <div className="title">Formula 1 Season 2008</div>
      </header>

      <Formula />

      <div>
        <img src={f1logo} className="footer-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
