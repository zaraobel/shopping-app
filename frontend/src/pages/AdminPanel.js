import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const AdminPanel = () => {
  const { user } = useContext(UserContext);

  if (!user || user.role !== 'admin') {
    return <p>Access denied. Admins only.</p>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* Admin functionality goes here */}
    </div>
  );
};

export default AdminPanel;
