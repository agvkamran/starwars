import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import dataReducer from "./reducer";
import rootSaga from "./saga/saga";

const sagaMiddleWare = createSagaMiddleware();

const reducers = combineReducers({
    dataPage: dataReducer
});

let store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;