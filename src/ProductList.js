import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <Product key={number} id={number} thumbnail="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg"
        price="25" name="Chair"
      />
    );
    return (
      <div className="container">
        {listItems}
      </div>
    );
  }
}

export default ProductList;