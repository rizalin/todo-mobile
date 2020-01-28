import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Todos } from "../_reducers/todo";
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga";
import Saga from "../_saga/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    Todos
});

const store = createStore(
    reducers,
    applyMiddleware(logger, initialiseSagaMiddleware)
);

initialiseSagaMiddleware.run(Saga);

export default store;
