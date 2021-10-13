import { call, takeEvery, put } from 'redux-saga/effects';

const getSwapi = async (url) => {
    const response = await fetch(url)
        .then((starshipsData) => starshipsData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getDataStarshipsWatcher() {
    yield takeEvery('GET_FIRST_DATA_STARSHIPS', getDataStarshipsWorker);
}

function* getDataStarshipsWorker({ payload }) {
    const data = yield call(getSwapi, payload);
    yield put({ type: 'SET_STARSHIPS', payload: data.results });
    yield put({ type: 'SET_PAGES', payload: data.count });
}

const getInfoStarship = async (id) => {
    const response = await fetch(id)
        .then((starshipData) => starshipData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getInfoStarshipWatcher() {
    yield takeEvery('GET_INFO_STARSHIP', getInfoStarshipWorker);
}

function* getInfoStarshipWorker({ payload }) {
    const data = yield call(getInfoStarship, payload);
    yield put({ type: 'SET_STARSHIP', payload: data });
}