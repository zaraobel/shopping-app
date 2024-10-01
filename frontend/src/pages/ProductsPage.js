import React, { useState } from 'react';
import axios from 'axios'; // You'll use axios for API requests

const ProductsPage = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', price: 9.99 },
  ];

  const addToCart = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token'); // Get user token from localStorage or state

      const response = await axios.post(
        '/cart', // This is the backend route you want to hit
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token to authenticate the user
          },
        }
      );

      if (response.status === 200) {
        console.log('Product added to cart:', response.data);
        alert('Product added to cart successfully!');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart.');
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product.id, 1)} // Adding one item to cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

 
export default ProductsPage;