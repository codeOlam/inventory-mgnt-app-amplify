import React from 'react';
import './App.css';
import Categories from './components/allCategory';
import Products from './components/Products';


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
