import React from 'react';
import './App.css';
import Categories from './components/allCategory';
import Products from './components/Products';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

function App() {
  return (
    <div className="App">
      <h1>Inventory app dash board</h1>
      <Categories />
      <Products />
    </div>
  );
}

export default App;
