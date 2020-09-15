import { handleActions } from 'redux-actions';

import { getTestSuccess } from '../actions/test.actions';

const initialState = {
  collection: []
};

const testReducer = handleActions(
  {
    /** Get Test */
    [getTestSuccess]: (state, action) => {
      state.collection = action.payload;
      return state;
    }
  },
  initialState
);

export default testReducer;