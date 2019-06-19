import { combineReducers } from 'redux';

const forecastsReducer = (forecasts = [], action) => {
    if (action.type === 'SEARCH') {
        return action.payload.data;
    }

    return forecasts;
};

const cityReducer = (city = '', action) => {
    if (action.type === 'SEARCH') {
        return action.payload.city_name;
    }

    return city;
};

const stateReducer = (state = '', action) => {
    if (action.type === 'SEARCH') {
        return action.payload.state_code;
    }

    return state;
};

const selectedForecastReducer = (selectedForecast = null, action) => {
    if (action.type === 'SHOW_DETAILS') {
        return action.payload;
    }

    return selectedForecast;
};

export default combineReducers({
    forecasts: forecastsReducer,
    city: cityReducer,
    state: stateReducer,
    selectedForecast: selectedForecastReducer
});
