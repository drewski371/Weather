import React from 'react'
import rainy from '../assets/rainy.svg';
import sunny from '../assets/day.svg';
import Paper from '@material-ui/core/Paper';

export default function DayForecast(props) {
    return (
        <Paper className="Paper" onClick={() => alert('hi')}>
            <div className="Day Row">
                {new Date(props.forecast.valid_date).toDateString()}
            </div>
            <div className="Row">
                Low: {props.forecast.min_temp} F
                </div>
            <div className="Row">
                High: {props.forecast.max_temp} F
                </div>
            <div className="Row">
                Precipitation: {props.forecast.pop}%
                </div>
            <div className="WeatherIcon">
                <img src={props.forecast.pop >= 40 ? rainy : sunny} alt="weather" />
            </div>
        </Paper>
    );

}
