import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        {/* Title */}
        <h4 className="mb-3">CyberSecurity Academy</h4>
        <p>Empowering the Next Generation of Tech Experts</p>

        {/* Contact Information */}
        <div className="contact-info my-3">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            123 Cyber Street, Silicon Valley, CA
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
            +91 8309729774
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            hackerplustechnologies@gmail.com

          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-links my-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/hacker-plus-technolgies-a52617318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/hackerplus_offical/profilecard/?igsh=eTFsdXUxY2ZlM2tx
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-3">
          <p>&copy; 2024 CyberSecurity Academy. All Rights Reserved.</p>
          <p>
            <a href="/privacy" className="text-white">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms" className="text-white">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
