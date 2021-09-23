import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const items = cart.reduce((prev, curr) => prev + curr.price, 0);
  const shipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);
  const totalBefore = items + shipping;
  const taxes = totalBefore / 20;
  const totals = totalBefore + taxes;
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Order Count : {cart.length}</p>
      <div className='cart-design'>
        <div className='cart-cost'>
          <p>Items:</p>
          <p>Shipping & Handling:</p>
          <p>Total Before Tax</p>
          <p>Taxes:</p>
          <h3 className='total'>Order Total:</h3>
        </div>
        <div className='cost-count'>
          <p>${items.toFixed(2)}</p>
          <p>${shipping.toFixed(2)}</p>
          <p>${totalBefore.toFixed(2)}</p>
          <p>${taxes.toFixed(2)}</p>
          <h3 className='total'>${totals.toFixed(2)}</h3>
        </div>
      </div>
      <button className="btn-review">Review Your Order</button>
    </div>
  );
};

export default Cart;
