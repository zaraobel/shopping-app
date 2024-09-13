import React from 'react';

const CheckoutPage = () => {
  const handleCheckout = () => {
    // Handle order submission here
    console.log("Order placed!");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
