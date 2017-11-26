import { combineReducers } from 'redux';
import indexReducer from './containers/Index/reducer';

// combile all reducers here, which is good to split code.
export default function createReducer() {
  return combineReducers({
    index: indexReducer,
  });
}