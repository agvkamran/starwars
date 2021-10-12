import { call, takeEvery, put } from 'redux-saga/effects';

const getSwapi = async (url) => {
    const response = await fetch(url)
        .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getDataPlanetsWatcher() {
    yield takeEvery('GET_FIRST_DATA_PLANETS', getDataPlanetsWorker);
}

function* getDataPlanetsWorker({ payload }) {
    const data = yield call(getSwapi, payload);
    yield put({ type: 'SET_PLANETS', payload: data.results });
    yield put({ type: 'SET_PAGES', payload: data.count });
}

const getInfoPlanet = async (id) => {
    const response = await fetch(id)
        .then((planetsData) => planetsData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getInfoPlanetWatcher() {
    yield takeEvery('GET_INFO_PLANET', getInfoPlanetWorker);
}

function* getInfoPlanetWorker({ payload }) {
    const data = yield call(getInfoPlanet, payload);
    console.log(data);
    yield put({ type: 'SET_PLANET', payload: data });
}