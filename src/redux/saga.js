import { put, takeEvery } from "redux-saga/effects";

function* testSaga(data) {
  yield takeEvery("ADD_VALUE", function* (data) {
    let res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    res = yield res.json();
    yield put({ type: "SET_VALUE", data: res });
  });
}

export default testSaga;
