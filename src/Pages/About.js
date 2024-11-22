import React from "react";
import "./About.css";
import Footer from './Footer';
import CallButton from "./CallButton";

const About = () => {
  return (
    <>
    <section className="about-us bg-dark text-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Excellence in Education, Driven by Passionate Expertise
          </p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="company-info">
              <h3 className="about-heading text-white">Who We Are</h3>
              <p className="lead">
                At Hacker Technologies, we are committed to empowering learners
                with cutting-edge skills in technology and cybersecurity. With
                years of experience and a passion for innovation, we provide
                unparalleled guidance to help students excel in their fields.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img
                src="https://www.springboard.com/blog/wp-content/uploads/2021/06/shutterstock_505066678-scaled.jpg"
                alt="Company"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <h3 className="about-heading text-white text-center mb-4">
            Our Experienced Staff
          </h3>
          {[
            {
              name: "John Doe",
              title: "Lead Instructor",
              desc: "Specializes in cybersecurity and AI technologies.",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
            {
              name: "Jane Smith",
              title: "Senior Developer",
              desc: "Expert in full-stack web development and data science.",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "David Johnson",
              title: "Mentor & Educator",
              desc: "Focuses on blockchain and cloud computing solutions.",
              img: "https://randomuser.me/api/portraits/men/34.jpg",
            },
          ].map((staff, index) => (
            <div
              key={index}
              className="col-md-4 d-flex justify-content-center mb-4"
            >
              <div className="staff-card text-center bg-secondary rounded shadow p-3">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="rounded-circle mb-3"
                  width="100"
                />
                <h5 className="staff-name mb-1">{staff.name}</h5>
                <p className="staff-title">{staff.title}</p>
                <p className="staff-desc">{staff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <CallButton/>
    </>
  );
};

export default About;
