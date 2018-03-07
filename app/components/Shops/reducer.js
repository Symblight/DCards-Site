import { 
    SHOPS_LIST_REQUEST,
    SHOPS_LIST_SUCCESS,
    SHOPS_LIST_INVALID,
} from '../../constants';


let initialState = {
    shops:[],
    didInvalid: false,
    isFetching: false,
};

const reducerShops = (state = initialState, action) => {
    switch(action.type) {
        case SHOPS_LIST_REQUEST: {
            return {
                ...state,
                didInvalid: false,
                isFetching: true,
            }
        }
        case SHOPS_LIST_SUCCESS: {
            return {
                ...state,
                shops: action.payload,
                didInvalid: false,
                isFetching: false,
            }
        }
        case SHOPS_LIST_INVALID: {
            return {
                ...state,
                didInvalid: true,
                isFetching: false,
            }
        }
        default: {
            return state;
        }
    }
};

export default reducerShops;