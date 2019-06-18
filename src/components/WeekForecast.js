import React from 'react'
import Grid from '@material-ui/core/Grid';
import DayForecast from './DayForecast';
import { connect } from 'react-redux';

const WeekForecast = ({ forecasts }) => {
    if (!forecasts.length) {
        return <p>Enter a zip code</p>
    }

    return (
        <div className="WeekForecast">
            <Grid container justify="center" spacing={2}>
                {forecasts.map(forecast => (
                    <Grid key={forecast.valid_date} item>
                        <DayForecast forecast={forecast} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return { forecasts: state.forecasts };
};

export default connect(mapStateToProps)(WeekForecast);
