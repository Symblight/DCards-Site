import { 
    CARDS_USER_REQUEST,
    CARDS_USER_SUCCESS,
	CARDS_USER_INVALID,
    USER_REQUEST_INFO,
    USER_SUCCESS_INFO,
    USER_INVALID_INFO,
    CARD_INFO
} from '../../constants';

let initialState = {
    user:{},
    cards: [],
    card:{},
    didInvalid: false,
    isFetching: false,
};

const reducerMain = (state = initialState, action) => {
    switch(action.type) {
        case CARDS_USER_REQUEST: {
            return {
                ...state,
                didInvalid: false,
                isFetching: true,
            }
        }
        case CARDS_USER_SUCCESS: {
            return {
                ...state,
                cards: action.payload,
                didInvalid: false,
                isFetching: false,
            }
        }
        case CARDS_USER_INVALID: {
            return {
                ...state,
                didInvalid: true,
                isFetching: false,
            }
        }
        case USER_REQUEST_INFO: {
            return {
                ...state,
                didInvalid: false,
                isFetching: true,
            }
        }
        case USER_SUCCESS_INFO: {
            return {
                ...state,
                user: action.payload,
                didInvalid: false,
                isFetching: false,
            }
        }
        case USER_INVALID_INFO: {
            return {
                ...state,
                didInvalid: true,
                isFetching: false,
            }
        }
        case CARD_INFO: {
            return {
                ...state,
                card: state.cards[0]
            }
        }
        default: {
            return state;
        }
    }
};

export default reducerMain;