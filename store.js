import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './saga';
import logger from './logger';

const sagaMiddleware = createSagaMiddleware();

export function configureStore (initialState = {}) {
  // add the middlewares to store
  // 1. sagaMiddleware: add redux-sage to work
  const middlewares = [
    sagaMiddleware,
  ];

  // 2. if in dev env, we add redux-loger to debug data
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  // run the saga here.
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent));
}
