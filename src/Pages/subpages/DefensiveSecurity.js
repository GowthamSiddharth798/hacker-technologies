import React from "react";
import "./DefensiveSecurity.css";
import Footer from '../Footer';

const DefensiveSecurity = () => {
  const courses = [
    { title: "Threat Hunter", description: "Identify and eliminate hidden cyber threats.", icon: "fa-search" },
    { title: "SIEM and Log Analysis", description: "Analyze logs for detecting and mitigating risks.", icon: "fa-database" },
    { title: "Incident Response and Forensic", description: "Master techniques to handle and investigate incidents.", icon: "fa-magnifying-glass" },
    { title: "Security Operations Center Analyst", description: "Become an expert in SOC analysis and monitoring.", icon: "fa-cogs" },
    { title: "Malware Analyst", description: "Analyze and counteract malware attacks effectively.", icon: "fa-bug" },
  ];

  const handleEnroll = (courseTitle) => {
    const phone = "8309729774"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the "${courseTitle}" course. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="defensive-security">
      <div className="parallax-bg">
        <div className="container py-5">
          <h2 className="text-center title mb-5">Defensive Security Courses</h2>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 neon-card">
                  <div className="icon">
                    <i className={`fas ${course.icon}`}></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
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
    </div>
  );
};

export default DefensiveSecurity;
