import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
import { getWeather } from '../api/getWeather';
import { forecastsSelector } from '../selectors';

function* search({ payload }) {
    try {
        const data = yield call(getWeather, payload.zip);

        yield put({ type: 'SHOW_DETAILS', payload: { selectedForecast: null } });
        yield put({ type: 'SEARCH_SUCCEEDED', payload: data });
    } catch (e) {
        console.error(`Error fetching weather data for zip code ${payload.zip}`, e);
    }
}

function* showDetails({ payload }) {
    const forecasts = yield select(forecastsSelector);
    const selectedForecast = forecasts.find(f => f.valid_date === payload.date)

    yield put({ type: 'SHOW_DETAILS', payload: { selectedForecast } });
}

export default function* rootSaga() {
    yield takeLatest('SEARCH_REQUEST', search);
    yield takeEvery('SHOW_DETAILS_REQUEST', showDetails);
}
