import {
  CARD_INFO_REQUEST,
  CARD_INFO_SUCCESS,
  CARD_INFO_INVALID,
} from '../../constants';

const requestCardInfo = () => ({
  type: CARD_INFO_REQUEST
});

const successCardInfo = (json) => ({
  type: CARD_INFO_SUCCESS,
  payload: json
});

const invalidCardInfo = () => ({
  type: CARD_INFO_INVALID
});

export const fetchInfoCard = (data) => (dispatch) => {
  // dispatch(requestCardInfo());
  dispatch(successCardInfo(data));
};
