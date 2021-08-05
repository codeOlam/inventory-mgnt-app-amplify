import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <h1>Inventory app dash board</h1>
    </div>
  );
}

export default App;
