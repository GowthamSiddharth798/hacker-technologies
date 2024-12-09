import React from "react";
import "./OffensiveSecurity.css";
import Footer from "../Footer";

const OffensiveSecurity = () => {
  const courses = [
    {
      title: "Ethical Hacker Essential",
      description: "Learn the fundamentals of ethical hacking.",
      icon: "fa-shield-alt",
    },
    {
      title: "Advanced Ethical Hacking and Web Pentesting",
      description: "Dive deeper into ethical hacking and penetration testing.",
      icon: "fa-code",
    },
    {
      title: "Web Application Penetration Testing",
      description: "Master techniques to secure web applications.",
      icon: "fa-globe",
    },
    {
      title: "Mobile Application Penetration Testing",
      description: "Specialize in securing mobile applications.",
      icon: "fa-mobile-alt",
    },
    {
      title: "API Penetration Testing",
      description: "Understand and secure APIs from vulnerabilities.",
      icon: "fa-plug",
    },
    {
      title: "Network Penetration Testing",
      description: "Protect networks with advanced penetration testing skills.",
      icon: "fa-network-wired",
    },
    {
      title: "OT-IOT Pentester",
      description: "Secure operational technology and IoT devices.",
      icon: "fa-satellite-dish",
    },
  ];

  const handleEnroll = (courseTitle) => {
    const phone = "8309729774"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the "${courseTitle}" course. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="offensive-security">
      <div className="parallax-bg">
        <div className="container py-5">
          <h2 className="text-center title mb-5">Offensive Security Courses</h2>
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
                    {/* Enroll Button */}
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

export default OffensiveSecurity;
