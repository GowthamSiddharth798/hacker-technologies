import React from "react";
import "./Contact.css"; // Optional: Add styles for the contact page

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-details py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            {/* Company Details */}
            <div className="col-md-6">
              <h5>Company Details</h5>
              <p>
                <strong>Hacker Technologies</strong>
              </p>
              <p>
                Address:  Hyderabad, Telangana, India
              </p>
              <p>Email: hackerplustechnologies@gmail.com</p>
              <p>Phone: +91-8309729774</p>
            </div>

            {/* Google Form */}
            <div className="col-md-6">
              <h5>Send Us a Message</h5>
              <iframe
                src="https://forms.gle/D7dUQWqTJFzX88L99"
                title="Google Form"
                width="100%"
                height="500"
                frameBorder="0"
                style={{
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
