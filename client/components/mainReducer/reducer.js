import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_INVALID,
  USER_SUCCESS_AUTH,
  USER_REQUEST_AUTH,
  USER_INVALID_AUTH,
  SIGN_OUT_USER
} from '../../constants';

const initialState = {
  user: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    cards: [],
    shops: []
  },
  guest: {

  },
  config: {
    title: 'DiCards',
    name: 'Discount Cards',
    discription: '',
    language: 'ru',
  },
  Authentication: true,
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
    case USER_REQUEST_AUTH: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      };
    }
    case USER_SUCCESS_AUTH: {
      return {
        ...state,
        user: action.payload,
        didInvalid: false,
        isFetching: false,
        Authentication: true
      };
    }
    case USER_INVALID_AUTH: {
      return {
        ...state,
        didInvalid: true,
        isFetching: false,
      };
    }
    case SIGN_OUT_USER: {
      return {
        ...state,
        Authentication: false
      };
    }
    default:
      return state;

  }
};

export default reducerConfig;