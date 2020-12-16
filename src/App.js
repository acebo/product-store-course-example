import React from 'react';
import './assets/style.css';
import data from './data.json'

import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div className="App">
      <div className="product-list">
        {
          data.products.map(product => (
            <ProductItem key={product.id} { ...product } />
          ))
        }
      </div>
    </div>
  );
}

export default App;
