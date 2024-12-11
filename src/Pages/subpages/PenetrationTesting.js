import React from 'react';
import Footer from '../Footer';

const PenetrationTesting = () => {
  // Define the courses array and handleEnroll function outside the return statement
  const courses = [
    {
      title: "API Penetration Testing",
      description: "Learn how to identify vulnerabilities and secure APIs.",
      icon: "fa-plug",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Mobile Application Penetration Testing",
      description: "Specialize in securing mobile applications from attacks.",
      icon: "fa-mobile-alt",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "IoT Penetration Testing",
      description: "Protect Internet of Things (IoT) devices from cyber threats.",
      icon: "fa-satellite-dish",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Operational Technology Penetration Testing",
      description: "Learn to secure critical operational technologies.",
      icon: "fa-industry",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Web Application Penetration Testing",
      description: "Master techniques to secure web applications from vulnerabilities.",
      icon: "fa-globe",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Advanced Pentesting Techniques",
      description: "Learn advanced penetration testing skills for all environments.",
      icon: "fa-shield-alt",
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
  ];

  // Function to handle enroll button click and redirect to WhatsApp
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
          <h2 className="text-center title mb-5">Penetration Testing Courses</h2>
          <div className="row g-4">
            {/* Loop through the courses and render each course's details */}
            {courses.map((course, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 neon-card">
                  <div className="icon">
                    <i className={`fas ${course.icon}`}></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <div className="card-price">
                      <span className="discounted-price">{course.price} only</span>
                      <span className="original-price">{course.originalPrice}</span>
                    </div>
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

export default PenetrationTesting;
