import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { thumbnail, name, price, id } = this.props;
    return (
      <Link to={"/product/" + id} className="product-link">
        <div className="product-list-item">
          <img
            src={thumbnail}
            alt={name}
            className="product-thumbnail img-thumbnail"
          />
          <span className="product-name">
            {name}
          </span>
          <span className="product-price">
            ${price}
          </span>
        </div>
      </Link>
    );
  }
}

export default Product;