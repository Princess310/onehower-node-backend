import { put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import {
  FETCH_DATA,
} from './constants';

export function* fetchData() {
  try {
    const result = yield request.doGet('user/list');
    // here, we show the response from bakend.
    console.log('result', result);
    // add the console here to make sure saga works.
    console.log('Now it is in the sags.');
  } catch (err) {
    // console.log(err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(FETCH_DATA, fetchData);
}
