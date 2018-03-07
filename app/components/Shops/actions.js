import { 
    SHOPS_LIST_REQUEST,
    SHOPS_LIST_SUCCESS,
    SHOPS_LIST_INVALID,
} from '../../constants';

const requestShopsList = () => {
    return {
        type: SHOPS_LIST_REQUEST
    }
};

const successShopsList = (json) => {
    return {
        type: SHOPS_LIST_SUCCESS,
        payload: json
    }
};

const invalidShopsList = () => {
    return {
        type: SHOPS_LIST_INVALID
    }
};

export const fetchShopsList = (data) => {
    return (dispatch) => {
       // dispatch(requestCardInfo());
        dispatch(successShopsList(data))
    }
};