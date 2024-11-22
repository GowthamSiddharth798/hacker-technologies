import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure this is included
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../Images/Logo.jpg'; // Import the logo

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo and heading */}
        <Link className="navbar-brand" to="/">
          <h1 className="navbar-heading">
            <img src={Logo} alt="Hacker Technologies Logo" />
            Hacker Technologies
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
