import { getWeather } from '../api/getWeather';

export const search = zip => async dispatch => {
    const data = await getWeather(zip);

    dispatch({ type: 'SHOW_DETAILS', payload: null });
    dispatch({ type: 'SEARCH', payload: data });
};

export const showDetails = date => (dispatch, getState) => {
    const state = getState();
    const selectedForecast = state.forecasts.find(f => f.valid_date === date);
    
    dispatch({ type: 'SHOW_DETAILS', payload: selectedForecast });
};
