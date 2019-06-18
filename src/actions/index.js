import { getWeather } from '../api/getWeather';

export const search = zip => async dispatch => {
    const data = await getWeather(zip);
    
    dispatch({ type: 'SEARCH', payload: data });
};
