import React from 'react'
import Grid from '@material-ui/core/Grid';
import DayForecast from './DayForecast';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    weekForecast: {
        textAlign: 'center'
    }
});

const WeekForecast = ({ forecasts }) => {
    const classes = useStyles();

    if (!forecasts.length) {
        return <p>Enter a zip code</p>
    }

    return (
        <div className={classes.weekForecast}>
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
    return { forecasts: state.forecasts };
};

export default connect(mapStateToProps)(WeekForecast);
