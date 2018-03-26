import {
  SHOP_INFO_REQUEST,
  SHOP_INFO_SUCCESS,
  SHOP_INFO_INVALID,
  SHOP_CARDS_REQUEST,
  SHOP_CARDS_SUCCESS,
  SHOP_CARDS_INVALID
} from '../../constants';

const initialState = {
  info: {

  },
  cards: [],
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
    case SHOP_CARDS_REQUEST: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      };
    }
    case SHOP_CARDS_SUCCESS: {
      return {
        ...state,
        cards: action.payload,
        didInvalid: false,
        isFetching: false,
      };
    }
    case SHOP_CARDS_INVALID: {
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