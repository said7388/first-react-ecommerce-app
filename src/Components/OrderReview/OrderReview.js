import React from "react";
import { removeFromDb } from "../utilities/fakedb";
import Cart from "../Cart/Cart";
import CartProduct from "../CartProduct/CartProduct";
import useCart from "../Hooks/useCart/useCart";
import useProducts from "../Hooks/useProducts/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(cart);
  const handleAddToRemove = (product) => {
    const newCart = cart.filter((prod) => prod.key !== product.key);
    setCart(newCart);
    removeFromDb(product.key);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
