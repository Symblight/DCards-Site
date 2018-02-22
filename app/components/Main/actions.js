import { 
    CARDS_USER_REQUEST,
    CARDS_USER_SUCCESS,
    CARDS_USER_INVALID,
    USER_REQUEST_INFO,
    USER_SUCCESS_INFO,
    USER_INVALID_INFO
} from '../../constants';

/* INFO */

const requestUserInfo = () => {
    return {
        type: USER_REQUEST_INFO
    }
};

const successUserInfo = (json) => {
    return {
        type: USER_SUCCESS_INFO,
        payload: json
    }
};

const invlidUserInfo = () => {
    return {
        type: USER_INVALID_INFO
    }
};

export const fetchUserInfo = (data) => {
    return (dispatch) => {
        //dispatch(requestUserCards());
        dispatch(successUserInfo(data));
    }
};

/* CARDS */

const requestUserCards = () => {
    return {
        type: CARDS_USER_REQUEST
    }
};

const successUserCards = (json) => {
    return {
        type: CARDS_USER_SUCCESS,
        payload: json
    }
};

const invlidUserCards = () => {
    return {
        type: CARDS_USER_INVALID
    }
};

export const fetchCardsUser = (data) => {
    return (dispatch) => {
        //dispatch(requestUserCards());
        dispatch(successUserCards(data));
    }
};