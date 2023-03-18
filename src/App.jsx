import React from "react";
import Login from "./components/Login/Login";

const App = () => {
  const a = 1;
  const b = 2;

  return (
    <div className="App_test">
      <a className="App-link" href="#">
        Learn React
      </a>
      <ul>
        <li>Python</li>
        <li>C#</li>
        <li>Javascript</li>
      </ul>
      <h1 data-testid="mytestid">Hello World</h1>
      <span title="sum">{a + b}</span>
      <Login />
    </div>
  );
};

export default App;
