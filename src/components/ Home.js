import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Zaki Airline</h2>
      <p>We are committed to providing you with the best air travel experience.</p>
      
      <div className="video-container">
        <h3>Introduction Video</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      
      <div className="services">
        <h3>Our Services</h3>
        <ul>
          <li>Comfortable Seating</li>
          <li>In-flight Entertainment</li>
          <li>Gourmet Meals</li>
          <li>Frequent Flyer Program</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;



