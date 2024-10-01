// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faSearch, faHome, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* App Brand */}
        <Link to="/" className="navbar-brand">
          My Shopping App
        </Link>

        {/* Navbar Toggler (Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                <FontAwesomeIcon icon={faBoxOpen} /> Products
              </Link>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </form>

          {/* Cart button */}
          <Link to="/cart" className="btn btn-outline-primary ms-3">
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </Link>

          {/* User dropdown */}
          <div className="dropdown ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} /> User
            </button>
            <ul className="dropdown-menu" aria-labelledby="userMenu">
              <li>
                <Link className="dropdown-item" to="/profile-update">
                  View Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/order-history">
                  Order History
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
