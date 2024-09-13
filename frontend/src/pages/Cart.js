import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
