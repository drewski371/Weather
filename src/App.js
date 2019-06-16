import React, { useState } from 'react';
import './App.css';
import WeekForecast from './components/WeekForecast';
import Header from './components/Header';
import { getWeather } from './api/getWeather';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = zip => {
    setIsLoading(true);

    getWeather(zip)
      .then(data => {
        console.log(data);
        setForecasts(data.data);
        setCity(data.city_name);
        setState(data.state_code);
        setIsLoading(false);
      });
  }

  const renderContent = () => (
    isLoading ?
      <p>Loading...</p> :
      <WeekForecast forecasts={forecasts} />
  );

  return (
    <div>
      <Header city={city} state={state} onSearchClick={handleSearch} />
      {renderContent()}
    </div>
  );
}

export default App;
