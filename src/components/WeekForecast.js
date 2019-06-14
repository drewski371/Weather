import React from 'react'
import Grid from '@material-ui/core/Grid';
import DayForecast from './DayForecast';

const WeekForecast = ({ forecasts }) => {
    if (!forecasts)
        return null;

    return (
        <div className="WeekForecast">
            <Grid container justify="center" spacing={2}>
                {forecasts.map(forecast => (
                    <Grid key={forecast.valid_date} item>
                        <DayForecast forecast={forecast}></DayForecast>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default WeekForecast;
