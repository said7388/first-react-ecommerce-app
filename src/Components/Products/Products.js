import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import Product from "../Product/Product";
import { addToDb } from "../utilities/fakedb";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [searchProducts, setSearchProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setSearchProducts(data)
      });
      
  }, []);

  const eventHandler = (product) => {
    const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
  };
  // console.log(cart);
  // console.log(products)
  const searchHandler = event => {
    const searchText = event.target.value;
    const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchProducts(matchedProducts);
  }
  return (
    <div>
      <div className="search">
        <input type="text" onChange={searchHandler} placeholder="Search your product" />
      </div>
      <div className='product-body'>
        <div className='products-area'>
          {searchProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              clicked={eventHandler}></Product>
          ))}
        </div>
        <div className='cart-area'>
          <div>
            <Cart cart={cart}><Link to='/review'>
        <button className='btn-review'>Review Your Order</button>
      </Link></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
