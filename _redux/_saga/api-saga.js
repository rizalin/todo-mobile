import { takeEvery, call, put } from "redux-saga/effects";
import { GET_TODOS, GET_DATA, API_ERROR, DATA_LOADING } from "../_config/const"

export default function* Saga() {
    yield takeEvery(GET_DATA, workerSaga)
}

function* workerSaga() {
    try {
        const payload = yield call(getTodosData);
        yield put({ type: DATA_LOADING });
        yield put({ type: GET_TODOS, payload });
    } catch (e) {
        yield put({ type: API_ERROR, payload: e });
    }
}

function getTodosData() {
    return fetch(
        "https://jsonplaceholder.typicode.com/todos?userId=1"
    ).then(response => response.json());
}