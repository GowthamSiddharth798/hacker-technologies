import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from'./Nav.js';
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      
{/* <Nav/> */}

      {/* Hero Section */}
      <header className="hero">
        <div className="container text-center text-white">
          <h1 className="display-4 animate-fade">Welcome to CyberSec Academy</h1>
          <p className="lead animate-slide">
            Build a career in cybersecurity with our cutting-edge courses!
          </p>
          <a href="/courses" className="btn btn-primary btn-lg">
            Explore Courses
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-shield-alt feature-icon"></i>
              <h3>Defensive Security</h3>
              <p>Master techniques to protect systems from cyber threats.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-user-secret feature-icon"></i>
              <h3>Ethical Hacking</h3>
              <p>Learn fundamentals of ethical hacking for a secure world.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-search feature-icon"></i>
              <h3>Advanced Bug Hunting</h3>
              <p>Gain expertise in identifying vulnerabilities in applications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
