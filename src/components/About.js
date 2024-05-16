import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Zaki Airline</h2>
      <p>Zaki Airline has been a pioneer in air travel, offering top-notch services and unparalleled customer experience.</p>
      
      <div className="team">
        <h3>Our Team</h3>
        <p>Meet the dedicated team that makes everything possible.</p>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - Head of Operations</li>
          <li>Emily Johnson - Customer Support Lead</li>
        </ul>
      </div>
      
      <div className="history">
        <h3>Our History</h3>
        <p>Founded in 1990, Zaki Airline has grown to become a leader in the aviation industry.</p>
      </div>
    </div>
  );
};

export default About;


