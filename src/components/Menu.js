// src/components/Menu.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Create a CSS file to style your menu

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/aircraft-info">Aircraft Info</Link></li>
        <li><Link to="/flight-route-info">Flight Route Info</Link></li>
        <li><Link to="/airline-map">Airline Map</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
