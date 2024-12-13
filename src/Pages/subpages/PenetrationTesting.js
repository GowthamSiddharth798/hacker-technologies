import React from 'react';
import Footer from '../Footer';
import CallButton from "../CallButton";
import ApiPenetrationImage from "../../Images/ApiPenetration.png";
import MobilePenetrationImage from "../../Images/MobilePenetration.png";
import IoTPenetrationImage from "../../Images/IoTPenetration.png";
import OperationalTechPenetrationImage from "../../Images/OperationalTechPenetration.png";
import WebPenetrationImage from "../../Images/WebPenetration.png";
import AdvancedPentestingImage from "../../Images/AdvancedPentesting.png";

const PenetrationTesting = () => {
  // Define the courses array with imported images
  const courses = [
    {
      title: "API Penetration Testing",
      description: "Learn how to identify vulnerabilities and secure APIs.",
      icon: "fa-plug",
      image: ApiPenetrationImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Mobile Application Security",
      description: "Specialize in securing mobile applications from attacks.",
      icon: "fa-mobile-alt",
      image: MobilePenetrationImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "IoT Penetration Testing",
      description: "Protect Internet of Things (IoT) devices from cyber threats.",
      icon: "fa-satellite-dish",
      image: IoTPenetrationImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Operational Technology Security",
      description: "Learn to secure critical operational technologies.",
      icon: "fa-industry",
      image: OperationalTechPenetrationImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Web Application Security",
      description: "Master techniques to secure web applications from vulnerabilities.",
      icon: "fa-globe",
      image: WebPenetrationImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
    {
      title: "Advanced Pentesting Techniques",
      description: "Learn advanced penetration testing skills for all environments.",
      icon: "fa-shield-alt",
      image: AdvancedPentestingImage,
      price: "₹15999",
      originalPrice: "₹20000", // Original price
    },
  ];

  // Function to handle enroll button click and redirect to WhatsApp
  const handleEnroll = (courseTitle) => {
    const phone = "+918309729774"; // Replace with your WhatsApp number
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
                  {/* Add the image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="card-img-top course-image"
                  />
                  <div className="card-body">
                    <div className="icon">
                      <i className={`fas ${course.icon}`}></i>
                    </div>
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <div className="card-price">
                      {/* <span className="discounted-price">{course.price} only</span>
                      <span className="original-price">{course.originalPrice}</span> */}
                    </div>
                    {/* Enroll Button */}
                    <div className="text-center mt-3">
                      <button
                        className="btn btn-primary enroll-button"
                        onClick={() => handleEnroll(course.title)}
                      >
                        Start Course
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

export default PenetrationTesting;
