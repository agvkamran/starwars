import { call, takeEvery, put } from 'redux-saga/effects';

const getSwapi = async (url) => {
    const response = await fetch(url)
        .then((peopleData) => peopleData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getDataPeopleWatcher() {
    yield takeEvery('GET_FIRST_DATA_PEOPLE', getDataPeopleWorker);
}

function* getDataPeopleWorker({ payload }) {
    const data = yield call(getSwapi, payload);
    yield put({ type: 'SET_PEOPLE', payload: data.results });
    yield put({ type: 'SET_PAGES', payload: data.count });
}

const getInfoPerson = async (id) => {
    const response = await fetch(id)
        .then((personData) => personData.json()).catch(err => console.log('swApi', err));
    return response;
}

export function* getInfoPersonWatcher() {
    yield takeEvery('GET_INFO_PERSON', getInfoPersonWorker);
}

function* getInfoPersonWorker({ payload }) {
    const data = yield call(getInfoPerson, payload);
    console.log(data);
    yield put({ type: 'SET_PERSON', payload: data });
}