import { createAction } from 'redux-actions';

import {
  SHOP_INFO_REQUEST,
  SHOP_INFO_SUCCESS,
  SHOP_INFO_INVALID
} from '../../constants';

const shopInfoRequest = createAction(SHOP_INFO_REQUEST);
const shopInfoSuccess = createAction(SHOP_INFO_SUCCESS, data => data);
const shopInfoInvalid = createAction(SHOP_INFO_INVALID);

export const fetchShopInfo = (data) => (dispatch) => {
  // dispatch(requestUserCards());
  dispatch(shopInfoSuccess(data));
};