import {
  CARDS_USER_REQUEST,
  CARDS_USER_SUCCESS,
  CARDS_USER_INVALID,
  USER_REQUEST_INFO,
  USER_SUCCESS_INFO,
  USER_INVALID_INFO
} from '../../constants';

/* INFO */

const requestUserInfo = () => ({
  type: USER_REQUEST_INFO
});

const successUserInfo = (json) => ({
  type: USER_SUCCESS_INFO,
  payload: json
});

const invlidUserInfo = () => ({
  type: USER_INVALID_INFO
});

export const fetchUserInfo = (data) => (dispatch) => {
  // dispatch(requestUserCards());
  dispatch(successUserInfo(data));
};

/* CARDS */

const requestUserCards = () => ({
  type: CARDS_USER_REQUEST
});

const successUserCards = (json) => ({
  type: CARDS_USER_SUCCESS,
  payload: json
});

const invlidUserCards = () => ({
  type: CARDS_USER_INVALID
});

export const fetchCardsUser = (data) => (dispatch) => {
  // dispatch(requestUserCards());
  dispatch(successUserCards(data));
};
