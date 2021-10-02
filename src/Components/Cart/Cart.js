import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let totalItems = 0;
  let itemsPrice = 0;
  let shipping = 0;
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalItems += product.quantity;
    itemsPrice += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
  }
  // const items = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  // const shipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);
  const totalBefore = itemsPrice + shipping;
  const taxes = totalBefore / 20;
  const totals = totalBefore + taxes;
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Order Count : {totalItems}</p>
      <div className='cart-design'>
        <div className='cart-cost'>
          <p>Items:</p>
          <p>Shipping & Handling:</p>
          <p>Total Before Tax</p>
          <p>Taxes:</p>
          <h3 className='total'>Order Total:</h3>
        </div>
        <div className='cost-count'>
          <p>${itemsPrice.toFixed(2)}</p>
          <p>${shipping.toFixed(2)}</p>
          <p>${totalBefore.toFixed(2)}</p>
          <p>${taxes.toFixed(2)}</p>
          <h3 className='total'>${totals.toFixed(2)}</h3>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Cart;
