import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import FullProduct from './FullProduct';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark">
          <Link className="navbar-brand" to="/">Garage Sale</Link>
        </nav>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={ProductList}/>
            <Route path="/product/:id" component={FullProduct}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
