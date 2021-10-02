import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart/useCart";
import Product from "../Product/Product";
import { addToDb } from "../utilities/fakedb";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useCart(products);
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
    const newCount = [...count, product];
    setCount(newCount);
    addToDb(product.key);
  };
  // console.log(count);
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
            <Cart cart={count}><Link to='/review'>
        <button className='btn-review'>Review Your Order</button>
      </Link></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
