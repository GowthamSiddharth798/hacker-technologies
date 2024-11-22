import React from 'react';
import './CallButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const CallButton = () => {
  const phoneNumber = "8309729774"; // Replace with your phone number

  return (
    <div className="call-button-container">
      <a href={`tel:${phoneNumber}`} className="call-button" title="Call Us">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  );
};

export default CallButton;
