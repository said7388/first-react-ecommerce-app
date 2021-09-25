import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setSearchProducts(data)
      });
      
  }, []);

  useEffect(() => {
    const storedProducts = getStoredCart();
    // console.log(storedProducts);
    const getStoredItems = [];
    for (let key in storedProducts) {
      // console.log(key);
      // console.log(storedProducts[key]);
      const addedProducts = products.find((product) => product.key === key);
      if (addedProducts) {
        addedProducts["quantity"] = storedProducts[key];
        getStoredItems.push(addedProducts);
        // console.log(key, addedProducts);
      }
    }
    setCount(getStoredItems);
  }, [products]);
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
            <Cart cart={count}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
