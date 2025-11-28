// components/ProductList.js
import React from "react";

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Medicine A", price: 10 },
    { id: 2, name: "Medicine B", price: 15 },
    { id: 3, name: "Medicine C", price: 20 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
