import {
  CHANGE_INFO,
  FETCH_DATA,
} from './constants';

export function changeInfo(info) {
  return {
    type: CHANGE_INFO,
    payload: {
      info,
    },
  };
}

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}