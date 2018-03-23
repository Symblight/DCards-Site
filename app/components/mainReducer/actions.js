import { createAction } from 'redux-actions';

import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_INVALID,
} from '../../constants';

const requestInit = createAction(INIT_REQUEST);
const successInit = createAction(INIT_SUCCESS, json => json);
const invalidInit = createAction(INIT_INVALID);

export const fetchInit = (data) => (dispatch) => {
  // dispatch(requestCardInfo());
  dispatch(successInit(data));
};
