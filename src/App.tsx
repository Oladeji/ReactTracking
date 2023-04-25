import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrackerModule from './TrakerModule';

const Button=(children:JSX.Element)=>{
  <button>{children}</button>
}
function App() {
  return (
    
    <div className="App">
      <TrackerModule></TrackerModule>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         <button id="rr" data-analytics-onclick="SendData"> click me</button>
         <button > try me</button>

      </header>
     
    </div>
  );
}

export default App;
