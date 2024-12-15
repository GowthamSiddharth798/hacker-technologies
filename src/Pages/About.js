import React from "react";
import "./About.css";
import Footer from "./Footer";
import CallButton from "./CallButton";

const About = () => {
  const instructors = [
    {
      name: "Jack Span",
      title: "Cybersecurity Expert",
      experience: "Over 4 years of hands-on experience in cybersecurity.",
      certifications: [
        "Certified Ethical Hacker (CEH)",
        "Certified SOC Analyst (CSA)",
        "Certified Penetration Tester (CPENT)",
        "ISO 27001 Certified Professional",
      ],
      specialization:
        "Specializes in penetration testing, compliance management, and security analysis. His expertise lies in helping organizations identify and mitigate vulnerabilities effectively.",
      img: "https://i2-prod.mirror.co.uk/incoming/article5423743.ece/ALTERNATES/s615b/MOST-BEAUTIFUL-FACES.jpg",
    },
    {
      name: "John Mike",
      title: "Cybercrime Investigator",
      experience:
        "5 years of hands-on experience in cybersecurity and IT forensics.",
      certifications: [
        "CEH Master",
        "CPENT",
        "Comptia+ Cyber Crime Investigator",
        "IoT Tester",
      ],
      specialization:
        "Expert in advanced penetration testing, cybercrime investigation, and IoT security. He has a proven track record of resolving complex cyber threats and training the next generation of ethical hackers.",
      img: "https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-4.jpg",
    },
    {
      name: "Jodge Harry",
      title: "Web Security Specialist",
      experience:
        "Over 3 years of hands-on experience in cybersecurity and web development.",
      certifications: [
        "Certified Ethical Hacker (CEH)",
        "Certified SOC Analyst (CSA)",
        "Full Stack Web Developer",
        "Cyber Forensics Expert",
      ],
      specialization:
        "Focuses on web application security, digital forensics, and full-stack development. His dual expertise ensures secure and efficient solutions for modern cyber challenges.",
      img: "https://cdn.pixabay.com/photo/2023/02/24/00/41/ai-generated-7809880_640.jpg",
    },
  ];

  return (
    <>
      <section className="about-us bg-dark text-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fade-in">About Us</h2>
            <p className="section-subtitle fade-in">
              Excellence in Education, Driven by Passionate Expertise
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 slide-in-left">
              <div className="company-info">
                <h3 className="about-heading text-white">Who We Are</h3>
                <p className="lead">
                  At Hacker Plus Technologies, we pride ourselves on providing
                  top-tier education in cybersecurity and related fields. Our
                  team is dedicated to empowering learners with practical
                  knowledge and skills to excel in their careers.
                </p>
                <p className="lead">
                  We offer our courses in multiple languages: Kannada, Telugu,
                  Hindi, and English, ensuring accessibility for learners from
                  diverse backgrounds.
                </p>
              </div>
            </div>
            <div className="col-md-6 slide-in-right">
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
            <h3 className="about-heading text-white text-center mb-4 fade-in">
              Our Experienced Instructors
            </h3>
            {instructors.map((staff, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center mb-4 fade-in"
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
                  <p className="staff-experience">{staff.experience}</p>
                  <ul className="list-unstyled staff-certifications">
                    {staff.certifications.map((cert, idx) => (
                      <li key={idx}>✔ {cert}</li>
                    ))}
                  </ul>
                  <p className="staff-specialization">{staff.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <CallButton />
    </>
  );
};

export default About;
