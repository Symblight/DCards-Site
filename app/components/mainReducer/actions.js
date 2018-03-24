import { createAction } from 'redux-actions';

import {
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_INVALID,
  USER_SUCCESS_AUTH,
  USER_REQUEST_AUTH,
  USER_INVALID_AUTH,
  SIGN_OUT_USER
} from '../../constants';

const requestInit = createAction(INIT_REQUEST);
const successInit = createAction(INIT_SUCCESS, json => json);
const invalidInit = createAction(INIT_INVALID);

const requestLogin = createAction(USER_REQUEST_AUTH);
const successLogin = createAction(USER_SUCCESS_AUTH, json => json.data);
const invalidLogin = createAction(USER_INVALID_AUTH, json => json);
export const signOut = createAction(SIGN_OUT_USER);

export const fetchLoginUser = (user) => (dispatch) => {
  // dispatch(requestLogin);
  dispatch(successLogin(user));
};

export const fetchInit = (data) => (dispatch) => {
  // dispatch(requestCardInfo());
  dispatch(successInit(data));
};
