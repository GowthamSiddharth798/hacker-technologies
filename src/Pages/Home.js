import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Footer from './Footer';
import CallButton from "./CallButton";
import main2 from '../Images/main2.jpg'
import main3 from '../Images/main3.jpg'
import main from '../Images/main.jpg'

const Home = () => {
  return (
    <div>
          <header className="carousel slide hero" id="heroCarousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={main}
                          className="d-block w-100"
                          alt="Cybersecurity"
                        />
                        <div className="carousel-caption">
                          <h1 className="display-4 animate-fade">Welcome to CyberSecurity Academy</h1>
                          <p className="lead animate-slide">Build a career in cybersecurity with our cutting-edge courses!</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={main3}
                          className="d-block w-100"
                          alt="Technology"
                        />
                        <div className="carousel-caption">
                          <h1 className="display-4 animate-fade">Secure the Digital World</h1>
                          <p className="lead animate-slide">Join hands with experts to master cybersecurity.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={main2}
                          className="d-block w-100"
                          alt="Coding"
                        />
                        <div className="carousel-caption">
                          <h1 className="display-4 animate-fade">Transform Your Career</h1>
                          <p className="lead animate-slide">Learn from professionals and stay ahead of threats.</p>
                        </div>
                      </div>
              </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="next"
  >
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

      {/* Carousel Section */}
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

      
      {/* <section className="modal-section text-center py-5">
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subscribeModal">
          Subscribe for Updates
        </button>

        <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="subscribeModalLabel">Subscribe to Our Newsletter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Stay updated with the latest news and courses in cybersecurity!</p>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 CyberSecurity Academy. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-white">Privacy Policy</a> | <a href="/terms" className="text-white">Terms of Service</a>
        </p>
      </footer> */}
      <Footer />

      <CallButton/>
    </div>
  );
};

export default Home;
