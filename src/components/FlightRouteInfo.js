import React, { useState } from 'react';
import axios from 'axios';

const FlightRouteInfo = () => {
  const [query, setQuery] = useState('');
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState(null);

  const fetchFlightData = async () => {
    try {
      const response = await axios.get(`https://api.adsbdb.com/v1/callsign/${query}`);
      setFlightData(response.data.response.flightroute);
      setError(null);
    } catch (err) {
      setError('Unknown callsign');
      setFlightData(null);
    }
  };

  return (
    <div>
      <h2>Flight Route Information</h2>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter Callsign" 
      />
      <button onClick={fetchFlightData}>Search</button>
      {error && <p>{error}</p>}
      {flightData && (
        <div>
          <p>Callsign: {flightData.callsign}</p>
          <p>Airline: {flightData.airline.name}</p>
          <p>Origin: {flightData.origin.name}, {flightData.origin.country_name}</p>
          <p>Destination: {flightData.destination.name}, {flightData.destination.country_name}</p>
        </div>
      )}
    </div>
  );
};

export default FlightRouteInfo;
