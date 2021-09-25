import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { name, img, seller, price, stock, star } = props.product;
  // console.log(props.product);
  return (
    <div className='product-item'>
      <div>
        <img width='218px' height='218px' src={img} alt='' />
      </div>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p>By: {seller} </p>
        <div className='product-rating'>
          <h3> ${price} </h3>
          <Rating className='rating'
            initialRating={star}
            emptySymbol='far fa-star'
            fullSymbol='fas fa-star'
            readonly></Rating>
        </div>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button
          onClick={() => props.clicked(props.product)}
          className='btn-regular'>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
