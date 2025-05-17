import React from 'react';
import AboutUs from '../components/AboutUs';
import './AboutUsDemo.css';

const AboutUsDemo = () => {
  return (
    <div className="about-us-demo">
      <div className="demo-showcase">
        <h1>About Us Component</h1>
        <p>This component displays company information and team profiles.</p>
        
        <div className="component-info">
          <h3>Component Details:</h3>
          <ul>
            <li><strong>Repository:</strong> repo-about-us</li>
            <li><strong>Type:</strong> Content Component</li>
            <li><strong>Features:</strong> Structured content sections, team member profiles, responsive layout</li>
          </ul>
        </div>
        
        <div className="component-display">
          <h3>Component Preview:</h3>
          <AboutUs />
        </div>
        
        <div className="customization-info">
          <h3>Customization Options:</h3>
          <p>This component can be easily customized by:</p>
          <ul>
            <li>Modifying the mission statement text</li>
            <li>Updating the company history</li>
            <li>Adding or removing team members</li>
            <li>Changing images and descriptions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDemo;