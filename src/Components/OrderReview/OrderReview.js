import React from "react";
import { clearTheCart, removeFromDb } from "../utilities/fakedb";
import Cart from "../Cart/Cart";
import CartProduct from "../CartProduct/CartProduct";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router-dom";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(cart);
  const handleAddToRemove = (product) => {
    const newCart = cart.filter((prod) => prod.key !== product.key);
    setCart(newCart);
    removeFromDb(product.key);
  };
  const removeOrderItem = () => {
    clearTheCart();
  };
  return (
    <div className='product-body'>
      <div className='products-area'>
        {cart.map((product) => (
          <CartProduct
            product={product}
            handleAddToRemove={handleAddToRemove}
            key={product.key}></CartProduct>
        ))}
      </div>
      <div className='cart-area'>
        <Cart cart={cart}>
          <Link to='/orderplace'>
            <button onClick={removeOrderItem} className='btn-review'>
              Place Order
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
