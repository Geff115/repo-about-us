import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Our Company</h2>
      <div className="about-content">
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            We are dedicated to providing the highest quality healthcare services
            to our community. Our mission is to improve the health and wellbeing
            of the individuals and communities we serve.
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our History</h3>
          <p>
            Founded in 2010, our organization has grown from a small clinic to a
            comprehensive healthcare network. We've helped thousands of patients
            and continue to expand our services to meet the needs of our growing
            community.
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h4>Jane Doe</h4>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h4>John Smith</h4>
              <p>Medical Director</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h4>Emily Johnson</h4>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;