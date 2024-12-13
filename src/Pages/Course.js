import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import Footer from './Footer';
import CallButton from "./CallButton";
import PenetrationTestingImage from '../Images/PenetrationTesting.jpg';
import defensive from '../Images/defensive.png';
import EthicalHacking from '../Images/EthicalHacking.jpg';
import Offensive from '../Images/Offensive.jpg';
import BugHunting from '../Images/BugHunting.jpg';
import digitalforensics from '../Images/digitalforensics.webp';

const Course = () => {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path); 
  };

  return (
    <>
      <div className="about-page">
        <section className="about-content py-5">
          <div className="container">
            <h2 className="text-center mb-4">
              Introducing Our Cybersecurity Courses
            </h2>
            <div className="row g-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-4"
                  onClick={() => handleCardClick(course.path)}
                >
                  <div className="card h-100 course-box shadow">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <CallButton />
    </>
  );
};

const courses = [
  {
    title: "Penetration Testing",
    description:
      "Specialize in penetration testing for APIs, mobile, web applications, networks, OT, and IoT.",
    image: PenetrationTestingImage,
    path: "/offensive-security",
  },
  {
    title: "Live Bug Hunting",
    description:
      "Gain expertise in identifying and exploiting vulnerabilities in applications.",
    image: BugHunting,
    path: "/course",
  },
  {
    title: "Defensive Security",
    description:
      "Master the techniques to protect and secure systems from cyber threats.",
    image: defensive,
    path: "/defensive-security",
  },
  {
    title: "Offensive Security",
    description:
      "Dive deep into offensive strategies to understand and mitigate potential attacks.",
    image: Offensive,
    path: "/offensive-security",
  },
  {
    title: "Ethical Hacking Essentials",
    description:
      "Learn the fundamentals of ethical hacking and its importance in today's digital landscape.",
    image: EthicalHacking,
    path: "/offensive-security",
  },
  {
    title: "Digital Forensics ",
    description:
      "Learn the techniques for investigating and analyzing digital crimes.",
    image: digitalforensics,
    path: "/defensive-security",
  },
];

export default Course;
