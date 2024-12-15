import React from "react";
import { Link } from "react-router-dom";
import "./OffensiveSecurity.css";
import Footer from "../Footer";
import EthicalHackingImage from "../../Images/EthicalHacking.jpg";
import AdvancedEthicalHackingImage from "../../Images/Ethical.png";
import PenetrationTestingImage from "../../Images/PenetrationTesting.jpg";
import CallButton from "../CallButton";

const OffensiveSecurity = () => {
  const courses = [
    {
      title: "Ethical Hacker Essential",
      description: "Learn the fundamentals of ethical hacking.",
      icon: "fa-shield-alt",
      price: "₹1499",
      originalPrice: "₹2000",
      image: EthicalHackingImage,
      link: "/offensive-security",
    },
    {
      title: "Advanced Ethical Hacking and Web Pentesting",
      description: "Dive deeper into ethical hacking and penetration testing.",
      icon: "fa-code",
      price: "₹7999",
      originalPrice: "₹12000",
      image: AdvancedEthicalHackingImage,
      link: "/offensive-security",
    },
    {
      title: "Penetration Testing",
      description: "Master techniques to secure web applications.",
      icon: "fa-globe",
      price: "₹15999",
      originalPrice: "₹20000",
      image: PenetrationTestingImage,
      link: "/penetration-testing",
    },
  ];

  // Function to handle enroll button click and redirect to WhatsApp
  const handleEnroll = (courseTitle) => {
    const phone = "+918309729774"; // Replace with your WhatsApp number (without '+' symbol)
    const message = `Hello, I am interested in the \"${courseTitle}\" course. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab or window
    if (window.innerWidth >= 768) {
      window.open(whatsappUrl, "_blank"); // Ensures it works for larger screen sizes (laptops)
    } else {
      window.location.href = whatsappUrl; // Fallback for smaller devices
    }
  };

  return (
    <div className="offensive-security">
      <div className="parallax-bg">
        <div className="container py-5">
          <h2 className="text-center title mb-5"> Security Courses</h2>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 neon-card">
                  <Link to={course.link}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body">
                    <div className="icon">
                      <i className={`fas ${course.icon}`}></i>
                    </div>
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <div className="card-price">
                      <span className="discounted-price">{course.price} only</span>
                      <span className="original-price">{course.originalPrice}</span>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-primary enroll-button"
                        onClick={() => handleEnroll(course.title)}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <CallButton />
    </div>
  );
};

export default OffensiveSecurity;
