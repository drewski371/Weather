import React from 'react';
import './App.css';
import WeekForecast from './components/WeekForecast';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <WeekForecast />
    </div>
  );
};

export default App;
