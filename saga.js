import es6promise from 'es6-promise';
import { all } from 'redux-saga/effects';
import indexSaga from './containers/Index/saga';

// es6 polyfill
es6promise.polyfill();

// we add all the sagas from containers, then add it to root saga.
export default function* rootSaga() {
  yield all([
    indexSaga(),
  ]);
}
