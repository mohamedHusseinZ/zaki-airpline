import React, { useState } from 'react';
import axios from 'axios';

const AircraftInfo = () => {
  const [query, setQuery] = useState('');
  const [aircraftData, setAircraftData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAircraftData = async () => {
    try {
      const response = await axios.get(`https://api.adsbdb.com/v1/aircraft/${query}`);
      setAircraftData(response.data.response.aircraft);
      setError(null);
    } catch (err) {
      setError('Unknown aircraft');
      setAircraftData(null);
    }
  };

  return (
    <div>
      <h2>Aircraft Information</h2>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter Mode S or Registration" 
      />
      <button onClick={fetchAircraftData}>Search</button>
      {error && <p>{error}</p>}
      {aircraftData && (
        <div>
          <p>Type: {aircraftData.type}</p>
          <p>Manufacturer: {aircraftData.manufacturer}</p>
          <p>Registration: {aircraftData.registration}</p>
          <p>Owner: {aircraftData.registered_owner}</p>
          {aircraftData.url_photo && <img src={aircraftData.url_photo} alt="Aircraft" />}
        </div>
      )}
    </div>
  );
};

export default AircraftInfo;
