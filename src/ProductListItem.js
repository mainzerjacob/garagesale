import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductListItem extends Component {
  render() {
    const { thumbnail, name, price, id } = this.props;
    return (
      <div className="product-list-item">
        <img
          src={thumbnail}
          alt={name}
          className="product-thumbnail img-thumbnail"
        />
        <Link to={"/product/" + id} className="product-link">
          <span className="product-name">
            {name}
          </span>
        </Link>
        <span className="product-price">
          ${price}
        </span>
      </div>
    );
  }
}

export default ProductListItem;