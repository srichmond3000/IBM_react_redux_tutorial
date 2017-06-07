import * as types from '../actions/actionTypes';

export default function trafficLightReducer(state = types.GO, action) {
  switch (action.type) {
    case types.GO:
      state = types.GO;
      break;

    case types.CAUTION:
      state = types.CAUTION;
      break;

    case types.STOP:
      state = types.STOP;
      break;
  }

  return state;
}