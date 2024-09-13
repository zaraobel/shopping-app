import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id}, Total: ${order.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
