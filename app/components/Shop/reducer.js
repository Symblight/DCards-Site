import {
  SHOP_INFO_REQUEST,
  SHOP_INFO_SUCCESS,
  SHOP_INFO_INVALID
} from '../../constants';

const initialState = {
  info: {

  },
  didInvalid: false,
  isFetching: false,
};

const reducerShop = (state = initialState, action) => {
  switch (action.type) {

    case SHOP_INFO_REQUEST: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      };
    }
    case SHOP_INFO_SUCCESS: {
      return {
        ...state,
        info: action.payload,
        didInvalid: false,
        isFetching: false,
      };
    }
    case SHOP_INFO_INVALID: {
      return {
        ...state,
        didInvalid: true,
        isFetching: false,
      };
    }
    default: {
      return state;
    }

  }
};

export default reducerShop;