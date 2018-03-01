import { 
    CARD_INFO_REQUEST,
    CARD_INFO_SUCCESS,
    CARD_INFO_INVALID,
} from '../../constants';

const requestCardInfo = () => {
    return {
        type: CARD_INFO_REQUEST
    }
};

const successCardInfo = (json) => {
    return {
        type: CARD_INFO_SUCCESS,
        payload: json
    }
};

const invalidCardInfo = () => {
    return {
        type: CARD_INFO_INVALID
    }
};

export const fetchInfoCard = (data) => {
    return (dispatch) => {
       // dispatch(requestCardInfo());
        dispatch(successCardInfo(data))
    }
};