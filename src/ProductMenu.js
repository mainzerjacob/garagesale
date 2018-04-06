import React, { Component } from 'react';
import ProductList from './ProductList';
import ListTypeToggle from './ListTypeToggle';

class ProductMenu extends Component {
  render() {
    const { listType, setListType } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-end">
          <ListTypeToggle listType={listType} setListType={setListType}/>
        </div>
        <div className="row">
          <ProductList listType={listType}/>
        </div>
      </div>
    );
  }
}

export default ProductMenu;