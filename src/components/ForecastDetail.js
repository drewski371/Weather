import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        paddingLeft: 10
    }
});

const ForecastDetail = ({ forecast }) => {
    const classes = useStyles();
    
    if (!forecast) return null;

    return (
        <div className={classes.root}>
            <p>Dew point: {forecast.dewpt}</p>
            <p>Ozone: {forecast.ozone}</p>
            <p>Precipitation: {forecast.precip} in</p>
            <p>Pressure: {forecast.pres}</p>
            <p>UV index: {forecast.uv}</p>
            <p>Wind direction: {forecast.wind_cdir_full}</p>
            <p>Wind speed: {forecast.wind_spd} mph</p>
            <p>Sunrise: {new Date(forecast.sunrise_ts).toTimeString()}</p>
            <p>Sunset: {new Date(forecast.sunset_ts).toTimeString()}</p>
        </div>
    )
}

const mapPropsToState = ({ selectedForecast }) => {
    return { forecast: selectedForecast };
};

export default connect(mapPropsToState)(ForecastDetail);
