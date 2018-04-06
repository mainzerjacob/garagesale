import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import ProductGridItem from './ProductGridItem';

class ProductList extends Component {
  render() {
    const { listType } = this.props;
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => {
        if (listType === "grid") {
          return <ProductGridItem key={number} id={number}
                                 thumbnail="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg"
                                 price="25" name="Chair"
          />

        }
        if (listType === "list") {
          return <ProductListItem key={number} id={number}
                           thumbnail="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg"
                           price="25" name="Chair"
          />
        }
        return null;
      }
    );
    return listType === "grid" ?
        (<div className="container">
          <div className="row">
            {listItems}
          </div>
        </div>)
        :
        (<div className="container">
          {listItems}
        </div>);
  }
}

export default ProductList;