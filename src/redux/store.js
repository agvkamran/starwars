import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./reducer";
import rootSaga from "./saga/saga";
import planetsReducer from "./planets-reducer";
import starshipsReducer from "./starships-reducer";

const sagaMiddleWare = createSagaMiddleware();

const reducers = combineReducers({
    dataPage: dataReducer,
    planetsPage: planetsReducer,
    starshipsPage: starshipsReducer
});

let store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;