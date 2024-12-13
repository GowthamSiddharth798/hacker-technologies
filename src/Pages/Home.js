import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Footer from './Footer';
import CallButton from "./CallButton";
import main from '../Images/main.jpg';
import main2 from '../Images/main2.png';
import main3 from '../Images/main3.png';
import main4 from '../Images/main4.png';
import main5 from '../Images/main5.png';


const Home = () => {
  return (
    <div>
      <header className="carousel slide hero" id="heroCarousel" data-bs-ride="carousel" data-bs-interval="2800">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={main} className="d-block w-100" alt="Cybersecurity" />
      <div className="carousel-caption d-md-block text-center p-4">
        <h1 className="display-4 animate-fade text-break mb-3">Welcome to CyberSecurity Academy</h1>
        <p className="lead animate-slide mb-4">Build a career in cybersecurity with our cutting-edge courses!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={main3} className="d-block w-100" alt="Technology" />
      <div className="carousel-caption d-md-block text-center p-4">
        <h1 className="display-4 animate-fade text-break mb-3">Secure the Digital World</h1>
        <p className="lead animate-slide mb-4">Join hands with experts to master cybersecurity.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={main2} className="d-block w-100" alt="Coding" />
      <div className="carousel-caption d-md-block text-center p-4">
        <h1 className="display-4 animate-fade text-break mb-3">Transform Your Career</h1>
        <p className="lead animate-slide mb-4">Learn from professionals and stay ahead of threats.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={main4} className="d-block w-100" alt="Innovation" />
      <div className="carousel-caption d-md-block text-center p-4">
        <h1 className="display-4 animate-fade text-break mb-3">Innovate for the Future</h1>
        <p className="lead animate-slide mb-4">Learn how to implement innovative security solutions.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={main5} className="d-block w-100" alt="Growth" />
      <div className="carousel-caption d-md-block text-center p-4">
        <h1 className="display-4 animate-fade text-break mb-3">Empower Your Growth</h1>
        <p className="lead animate-slide mb-4">Take your career to new heights with cybersecurity expertise.</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</header>


      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 text-dark">Our Core Features</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-shield-alt feature-icon"></i>
              <h3 className="ee">Defensive Security</h3>
              <p>Master techniques to protect systems from cyber threats.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-user-secret feature-icon"></i>
              <h3 className="ee">Ethical Hacking</h3>
              <p>Learn fundamentals of ethical hacking for a secure world.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-search feature-icon"></i>
              <h3 className="ee">Advanced Bug Hunting</h3>
              <p>Gain expertise in identifying vulnerabilities in applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="carousel-section py-5 bg-dark text-white mb-2">
        <div className="container">
          <h2 className="text-center mb-4">Student Success Stories</h2>
          <div id="successCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <p>"CyberSecurity Academy transformed my career in cybersecurity!"</p>
                <h5>- John Doe, Ethical Hacker</h5>
              </div>
              <div className="carousel-item text-center">
                <p>"The advanced bug hunting course is a game-changer!"</p>
                <h5>- Jane Smith, Bug Hunter</h5>
              </div>
              <div className="carousel-item text-center">
                <p>"Highly recommend their SOC and Digital Forensics training!"</p>
                <h5>- Alex Johnson, Forensics Expert</h5>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#successCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#successCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <CallButton />
    </div>
  );
};

export default Home;
