import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const eventHandler = (product) => {
    const newCount = [...count, product];
    setCount(newCount);
  };
  console.log(count);
  // console.log(products)
  return (
    <div className='product-body'>
      <div className='products-area'>
        {products.map((product) => (
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
  );
};

export default Products;
