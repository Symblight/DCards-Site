import { createAction } from 'redux-actions';

import {
  CARD_INFO_REQUEST,
  CARD_INFO_SUCCESS,
  CARD_INFO_INVALID,
} from '../../constants';

const requestCardInfo = createAction(CARD_INFO_REQUEST);
const successCardInfo = createAction(CARD_INFO_SUCCESS, json => json);
const invalidCardInfo = createAction(CARD_INFO_INVALID);

export const fetchInfoCard = (data) => (dispatch) => {
  // dispatch(requestCardInfo());
  dispatch(successCardInfo(data));
};
