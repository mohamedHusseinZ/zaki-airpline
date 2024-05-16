

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/ Home';
import About from './components/About';
import AircraftInfo from './components/AircraftInfo';
import FlightRouteInfo from './components/FlightRouteInfo';
import AirlineMap from './components/AirlineMap';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Zaki Airline</h1>
          <Menu />
        </header>
        <div className="App-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aircraft-info" element={<AircraftInfo />} />
            <Route path="/flight-route-info" element={<FlightRouteInfo />} />
            <Route path="/airline-map" element={<AirlineMap />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
lafaano
export default App;







