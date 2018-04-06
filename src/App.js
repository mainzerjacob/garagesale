import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductMenu from './ProductMenu';
import FullProduct from './FullProduct';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listType: "grid"
    }
    this.setListType = this.setListType.bind(this);
  }
  render() {
    const { listType } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark">
          <Link className="navbar-brand" to="/">Garage Sale</Link>
        </nav>
        <div className="main-content">
          <Switch>
            <Route exact path="/" render={()=><ProductMenu listType={listType} setListType={this.setListType}/>}/>
            <Route path="/product/:id" component={FullProduct}/>
          </Switch>
        </div>
      </div>
    );
  }
  setListType(type) {
    this.setState({
      listType: type
    });
  }
}

export default App;
