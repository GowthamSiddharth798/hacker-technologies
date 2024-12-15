import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import Footer from './Footer';
import CallButton from "./CallButton";
import defensive from '../Images/defensive.png';
import Offensive from '../Images/Offensive.jpg';


const Course = () => {
  const navigate = useNavigate();
  const handleCardClick = (path) => {
    navigate(path); 
  };

  return (
    <>
      <div className="about-page center row1">
        <section className="about-content py-5 ">
          <div className="container ">
            <h2 className="text-center mb-4">
              Introducing Our Cybersecurity Courses
            </h2>
            <div className="row row1 g-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-4"
                  onClick={() => handleCardClick(course.path)}
                >
                  <div className="card  h-100 course-box shadow">
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
  
];

export default Course;
