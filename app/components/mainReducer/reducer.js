import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_INVALID,
} from '../../constants';

const initialState = {
  user: {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  },
  guest: {

  },
  config: {},
  auth: false,
  didInvalid: false,
  isFetching: false,
};

const reducerConfig = (state = initialState, action) => {
  switch (action.type) {

    case INIT_REQUEST: {
      return {
        ...state
      };
    }

    case INIT_SUCCESS: {
      return {
        ...state
      };
    }

    case INIT_INVALID: {
      return {
        ...state
      };
    }
    default:
      return state;

  }
};

export default reducerConfig;