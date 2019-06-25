import React from 'react'
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

import sunny from '../assets/day.svg';
import rainy from '../assets/rainy.svg';

const useStyles = makeStyles({
    paper: {
        padding: 10,
        height: 225,
        width: 155,
        '&:hover': {
            backgroundColor: 'rgb(250, 250, 250)'
        }
    },
    row: {
        paddingTop: 5,
        paddingBottom: 5
    },
    weatherIcon: {
        paddingTop: 20
    }
});

const DayForecast = ({ forecast, showDetails }) => {
    const classes = useStyles();
    
    return (
        <Paper className={classes.paper} id={forecast.valid_date} onClick={(e) => showDetails(e.currentTarget.id)}>
            <div className={classes.row}>
                <b>{new Date(forecast.valid_date).toDateString()}</b>
            </div>
            <div className={classes.row}>
                Low: {forecast.min_temp} F
            </div>
            <div className={classes.row} >
                High: {forecast.max_temp} F
            </div>
            <div className={classes.row} >
                Precipitation: {forecast.pop}%
            </div>
            <div className={classes.weatherIcon}>
                <img src={forecast.pop >= 40 ? rainy : sunny} alt="weather" />
            </div>
        </Paper>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        showDetails: date => dispatch({ type: 'SHOW_DETAILS_REQUEST', payload: { date } })
    }
}

export default connect(null, mapDispatchToProps)(DayForecast);
