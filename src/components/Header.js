import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you create a separate CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Blogging Platform</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link> {/* Added Register link */}
        <Link to="/admin" className="nav-link">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
