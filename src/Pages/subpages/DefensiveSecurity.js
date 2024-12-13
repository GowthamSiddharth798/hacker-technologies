import React from "react";
import { Link } from "react-router-dom";
import "./DefensiveSecurity.css";
import Footer from "../Footer";
import CallButton from "../CallButton";
import ThreatHunterImage from "../../Images/ThreatHunter.png";
import IncidentResponseImage from "../../Images/IncidentResponse.png";
import SOCAnalystImage from "../../Images/SOCAnalyst.png";
import MalwareAnalystImage from "../../Images/MalwareAnalyst.png";
import digitalforensics2 from "../../Images/digitalforensics2.png";


const DefensiveSecurity = () => {
  const courses = [
    {
      title: "Threat Hunter",
      description: "Identify and eliminate hidden cyber threats.",
      icon: "fa-search",
      price: "₹14999",
      originalPrice: "₹18000",
      image: ThreatHunterImage,
      link: "/threat-hunter", // Route to redirect to this course's details
    },
    {
      title: "Incident Response and Forensic",
      description: "Master techniques to handle and investigate incidents.",
      icon: "fa-magnifying-glass",
      price: "₹11999",
      originalPrice: "₹15000",
      image: IncidentResponseImage,
      link: "/incident-response", // Route to redirect to this course's details
    },
    {
      title: "Security Operations Center Analyst",
      description: "Become an expert in SOC analysis and monitoring.",
      icon: "fa-cogs",
      price: "₹17999",
      originalPrice: "₹20000",
      image: SOCAnalystImage,
      link: "/soc-analyst", // Route to redirect to this course's details
    },
    {
      title: "Malware Analyst",
      description: "Analyze and counteract malware attacks effectively.",
      icon: "fa-bug",
      price: "₹13499",
      originalPrice: "₹17000",
      image: MalwareAnalystImage,
      link: "/malware-analyst", // Route to redirect to this course's details
    },
    {
      title: "Digital Forensics ",
      description: "Learn the techniques for investigating and analyzing digital crimes.",
      icon: "fa-bug",
      price: "₹13499",
      originalPrice: "₹17000",
      image: digitalforensics2,
      link: "/defensive-security", // Route to redirect to this course's details
    },
    
  ];

  const handleEnroll = (courseTitle) => {
    const phone = "+918309729774"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the "${courseTitle}" course. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="defensive-security">
      <div className="parallax-bg">
        <div className="container py-5">
          <h2 className="text-center title mb-5"> Security Courses</h2>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 neon-card">
                  {/* Add clickable image */}
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
                    {/* Enroll Now Button */}
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

export default DefensiveSecurity;
