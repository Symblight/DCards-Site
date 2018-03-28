import { createAction } from 'redux-actions';

import {
  INIT_SUCCESS,
  USER_SUCCESS_AUTH,
  USER_REQUEST_AUTH,
  USER_INVALID_AUTH,
  SIGN_OUT_USER
} from '../../constants';

export const requestInit = createAction(INIT_SUCCESS);

const requestLogin = createAction(USER_REQUEST_AUTH);
const successLogin = createAction(USER_SUCCESS_AUTH, json => json.data);
const invalidLogin = createAction(USER_INVALID_AUTH, json => json);
export const signOut = createAction(SIGN_OUT_USER);

export const fetchLoginUser = (user) => (dispatch) => {
  // dispatch(requestLogin);
  dispatch(successLogin(user));
};
