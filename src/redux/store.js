import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./people/reducer";
import rootSaga from "./saga/saga";
import planetsReducer from "./planets/planets-reducer";
import starshipsReducer from './starships/starships-reducer';

const sagaMiddleWare = createSagaMiddleware();

const reducers = combineReducers({
    dataPage: dataReducer,
    planetsPage: planetsReducer,
    starshipsPage: starshipsReducer
});

let store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;