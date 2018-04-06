import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductGridItem extends Component {
  render() {
    const { thumbnail, name, price, id } = this.props;
    return (
      <div className="product-grid-item card text-dark col-12 col-sm-6 col-lg-3" onClick={()=>alert("hi")}>
        <img
          src={thumbnail}
          alt={name}
          className="product-grid-preview card-img"
        />
        <div className="card-footer bg-transparent">
          <h5 className="card-title">
            <Link to={"/product/" + id} className="product-link">{name} - ${price}
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default ProductGridItem;