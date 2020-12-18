import React from 'react';
import './assets/style.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
