import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const { cart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      await axios.post(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
        amount: cart.reduce((sum, product) => sum + product.price, 0) * 100, // amount in cents
      }).then(res => res.data.clientSecret), {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
      {error && <div>{error}</div>}
      {success && <div>Payment Successful!</div>}
    </form>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
