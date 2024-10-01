import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'; // Your Stripe Checkout form
import axios from 'axios';

// Load Stripe with your publishable key
const stripePromise = loadStripe('your-publishable-key-here');

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false); // Toggle checkout form visibility

  // Fetch cart items from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you're using a token for authentication
        const response = await axios.get('http://localhost:5000/cart', {
          headers: { Authorization: `Bearer ${token}` }, // Pass the token for authenticated requests
        });

        // Set cart data and calculate total
        setCart(response.data);

        const cartTotal = response.data.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(cartTotal);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  // Proceed to checkout handler
  const proceedToCheckout = () => {
    setIsCheckout(true); // Show the payment form
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {/* Display cart items */}
          {cart.map((item, index) => (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3> {/* Display the total */}

          {/* Show the checkout form when the user proceeds to checkout */}
          {isCheckout ? (
            <Elements stripe={stripePromise}>
              <CheckoutForm total={total} />
            </Elements>
          ) : (
            <button className="btn btn-primary" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
