import {spawn} from 'redux-saga/effects';
import { getDataPlanetsWatcher, getInfoPlanetWatcher } from './planetsPage';
import {getDataPeopleWatcher, getInfoPersonWatcher} from './peoplePage';
import { getDataStarshipsWatcher, getInfoStarshipWatcher } from './starshipsPage';

export default function* rootSaga(){
    yield spawn(getDataPlanetsWatcher)
    yield spawn(getInfoPlanetWatcher)
    yield spawn(getDataPeopleWatcher)
    yield spawn(getInfoPersonWatcher)
    yield spawn(getDataStarshipsWatcher)
    yield spawn(getInfoStarshipWatcher)
}