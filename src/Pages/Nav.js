import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../Images/Logo.jpg'; // Import the logo

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Logo and heading */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="Hacker Technologies Logo" className="logo me-2" />
          <span className="brand-name">Hacker Plus Technologies</span>
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
              <Link className="nav-link hover-underline" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-underline" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-underline" to="/course">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-underline" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
