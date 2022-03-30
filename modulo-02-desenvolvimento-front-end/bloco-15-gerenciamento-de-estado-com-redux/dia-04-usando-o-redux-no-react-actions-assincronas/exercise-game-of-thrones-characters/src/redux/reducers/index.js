import { combineReducers } from "redux";
import {
  REQUEST_CHARACTER,
  GET_CHARACTER,
  FAILED_REQUEST
} from '../actions';

const INITIAL_STATE = {
  loading: false,
  character: null,
  error: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true };
    case GET_CHARACTER:
      return { ...state, loading: false, character: action.character[0] };
    case FAILED_REQUEST:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
