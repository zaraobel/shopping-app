import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products!', error));
  }, []);

  // In the ProductList component, display images
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
