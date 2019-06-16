import React from 'react'
import rainy from '../assets/rainy.svg';
import sunny from '../assets/day.svg';
import Paper from '@material-ui/core/Paper';

const DayForecast = ({ forecast }) => (
    <Paper className="Paper" onClick={() => alert('hi')}>
        <div className="Day Row">
            {new Date(forecast.valid_date).toDateString()}
        </div>
        <div className="Row">
            Low: {forecast.min_temp} F
            </div>
        <div className="Row">
            High: {forecast.max_temp} F
            </div>
        <div className="Row">
            Precipitation: {forecast.pop}%
            </div>
        <div className="WeatherIcon">
            <img src={forecast.pop >= 40 ? rainy : sunny} alt="weather" />
        </div>
    </Paper>
);

export default DayForecast;
