import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function *fetchUser(action) {
  try {
    yield put({
      type: "USER_FETCH", user: {
        name: 'joker'
      }
    });
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: "error"});
  }
}

function * mySaga()
 {

 }
