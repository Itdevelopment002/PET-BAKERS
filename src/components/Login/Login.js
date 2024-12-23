import React, { useState, useEffect } from "react";
import "./Login.css"; // Updated CSS file path
import logoImage from "../../assets/images/sleep-dog.png"; // Logo image
import dogGif from "../../assets/gif/dog.gif";
import fallingImage1 from "../../assets/images/cakepan.png"; // Falling image 1
import fallingImage2 from "../../assets/images/cookie.png"; // Falling image 2

const Login = () => {
  const [imageSrc, setImageSrc] = useState(dogGif);
  const [activityTimeout, setActivityTimeout] = useState(null);

  // Reset to the static image after 10 seconds of inactivity
  const startInactivityTimer = () => {
    if (activityTimeout) clearTimeout(activityTimeout); // Clear existing timer
    const timeout = setTimeout(() => setImageSrc(logoImage), 10000);
    setActivityTimeout(timeout);
  };

  // Handle mouse movement to reset inactivity timer and show GIF
  const handleMouseMove = () => {
    setImageSrc(dogGif); // Show GIF on activity
    startInactivityTimer(); // Restart inactivity timer
  };

  useEffect(() => {
    // Set initial timer and add event listeners
    startInactivityTimer();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listener and timeout on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      if (activityTimeout) clearTimeout(activityTimeout);
    };
  }, [activityTimeout]);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      {/* Falling images */}
      <img src={fallingImage1} alt="Falling 1" className="falling-image top-left" />
      <img src={fallingImage2} alt="Falling 2" className="falling-image top-right" />

      {/* Right Section */}
      <div className="right-section">
        <div className="login-form">
          {/* Animated Logo */}
          <img
            src={imageSrc}
            alt="Logo or Dog Animation"
            className="logo-animation"
          />
          <h1>Furry Frostings</h1>
          <h4>LOGIN</h4>
          <p>Enter your email and we’ll send you a login code</p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <button type="submit" className="btn">Continue</button>
          </form>
          <p className="mt-3">
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
