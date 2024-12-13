import React, { useState, useEffect } from "react";
import "./SplashScreen.css";
import Logo from "../Images/ms.jpg"; // Import the logo

const SplashScreen = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
    }, 4000); // Start fade-out at 4 seconds

    const hideScreenTimer = setTimeout(() => {
      onAnimationEnd(); // Notify parent to hide the splash screen
    }, 5000); // Fully hide after 5 seconds

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideScreenTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="zoom-container">
        <img src={Logo} alt="Logo" className="splash-logo" />
      </div>
      <h1 className="splash-text">Welcome to Hacker Plus Technologies</h1>
    </div>
  );
};

export default SplashScreen;
