import { createAction } from 'redux-actions';

import {
  SHOP_INFO_REQUEST,
  SHOP_INFO_SUCCESS,
  SHOP_INFO_INVALID,
  SHOP_CARDS_REQUEST,
  SHOP_CARDS_SUCCESS,
  SHOP_CARDS_INVALID
} from '../../constants';

const shopInfoRequest = createAction(SHOP_INFO_REQUEST);
const shopInfoSuccess = createAction(SHOP_INFO_SUCCESS, data => data);
const shopInfoInvalid = createAction(SHOP_INFO_INVALID);

const shopCardsRequest = createAction(SHOP_CARDS_REQUEST);
const shopCardsSuccess = createAction(SHOP_CARDS_SUCCESS, data => data);
const shopCardsInvalid = createAction(SHOP_CARDS_INVALID);

export const fetchShopInfo = (data) => (dispatch) => {
  // dispatch(requestUserCards());
  dispatch(shopInfoSuccess(data));
};
export const fetchShopCards = (data) => (dispatch) => {
  // dispatch(requestUserCards());
  dispatch(shopCardsSuccess(data));
};