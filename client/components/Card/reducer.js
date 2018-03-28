import {
  CARD_INFO_REQUEST,
  CARD_INFO_SUCCESS,
  CARD_INFO_INVALID,
} from '../../constants';

const initialState = {
  card: {},
  didInvalid: false,
  isFetching: false,
};

const reducerCard = (state = initialState, action) => {
  switch (action.type) {

    case CARD_INFO_REQUEST: {
      return {
        ...state,
        didInvalid: false,
        isFetching: true,
      };
    }
    case CARD_INFO_SUCCESS: {
      return {
        ...state,
        card: action.payload,
        didInvalid: false,
        isFetching: false,
      };
    }
    case CARD_INFO_INVALID: {
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

export default reducerCard;
