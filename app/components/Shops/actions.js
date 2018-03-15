import {
  SHOPS_LIST_REQUEST,
  SHOPS_LIST_SUCCESS,
  SHOPS_LIST_INVALID,
} from '../../constants';

const requestShopsList = () => ({
  type: SHOPS_LIST_REQUEST
});

const successShopsList = (json) => ({
  type: SHOPS_LIST_SUCCESS,
  payload: json
});

const invalidShopsList = () => ({
  type: SHOPS_LIST_INVALID
});

export const fetchShopsList = (data) => (dispatch) => {
  // dispatch(requestCardInfo());
  dispatch(successShopsList(data));
};
