import React from "react";
import Rating from "react-rating";

const CartProduct = (props) => {
  const { name, seller, price, quantity, star } = props.product;

  return (
    <div className='product-item'>
      <div className='product-details'>
        <h4 className='product-name'>{name}</h4>
        <p>by: {seller}</p>

        <div className='product-rating'>
          <h3> ${price} </h3>
          <Rating
            className='rating'
            initialRating={star}
            emptySymbol='far fa-star'
            fullSymbol='fas fa-star'
            readonly></Rating>
        </div>
        <p>quantity: {quantity}</p>
        <button
          onClick={() => props.handleAddToRemove(props.product)}
          className='btn-regular'>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
