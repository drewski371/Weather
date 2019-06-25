import { combineReducers } from 'redux';

const forecasts = (forecasts = [], action) => {
    if (action.type === 'SEARCH_SUCCEEDED') {
        return action.payload.data;
    }

    return forecasts;
};

const city = (city = '', action) => {
    if (action.type === 'SEARCH_SUCCEEDED') {
        return action.payload.city_name;
    }

    return city;
};

const state = (state = '', action) => {
    if (action.type === 'SEARCH_SUCCEEDED') {
        return action.payload.state_code;
    }

    return state;
};

const selectedForecast = (selectedForecast = null, action) => {
    if (action.type === 'SHOW_DETAILS') {
        return action.payload.selectedForecast;
    }

    return selectedForecast;
};

export default combineReducers({
    forecasts,
    city,
    state,
    selectedForecast
});
