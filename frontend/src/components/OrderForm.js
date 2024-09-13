import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    productId: '',
    quantity: '',
    totalPrice: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/orders`, formData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
      </label>
      <label>
        Product ID:
        <input type="text" name="productId" value={formData.productId} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
      </label>
      <label>
        Total Price:
        <input type="text" name="totalPrice" value={formData.totalPrice} onChange={handleChange} />
      </label>
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
