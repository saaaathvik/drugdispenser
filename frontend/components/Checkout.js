// components/Checkout.js
import React from "react";

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
	  
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
