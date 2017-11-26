import {
  CHANGE_INFO,
} from './constants';

const initialState = {
  userInfo: {
    username: 'princess310',
    age: 18,
  },
};

function indexPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INFO: {
      const { info } = action.payload;

      return {
        ...state,
        userInfo: info,
      };
    }
    default:
      return state; 
  }
}

export default indexPageReducer;