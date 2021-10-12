import {spawn} from 'redux-saga/effects';
import { getDataPlanetsWatcher, getInfoPlanetWatcher } from './planetsPage';

// import { race, takeLatest } from 'redux-saga/effects'

// async function getPeople() {
//     // const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
//     // const peopleData = await response.json();
//     // return peopleData;
// }

// export function* workerSaga(page) {
//     // const people = yield getPeople();
//     console.log(page);
// }

// export function* watcherSaga(page) {
//     console.log("watcher");

//     // yield takeLatest('PREV', workerSaga);
//     yield takeLatest('NEXT', workerSaga);
// }

// export default function* rootSaga() {
//     yield watcherSaga();
// }

export default function* rootSaga(){
    yield spawn(getDataPlanetsWatcher)
    yield spawn(getInfoPlanetWatcher)
}