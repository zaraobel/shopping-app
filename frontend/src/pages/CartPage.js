import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]); // You'd normally fetch this from backend or local storage

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => proceedToCheckout()}>Proceed to Checkout</button>
    </div>
  );
};

const proceedToCheckout = () => {
  console.log("Proceeding to checkout...");
};

export default CartPage;
