import { 
    USER_SUCCESS_AUTH,
    USER_REQUEST_AUTH,
    USER_INVALID_AUTH
} from '../../constants';

let initialState = {
    user: {
        username: '',
        email: '',
        password: ''
    },
	didInvalid: false,
    isFetching: false,
    Authentication: false,
};

const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST_AUTH: {
            return {
                ...state,
                didInvalid: false,
                isFetching: true,
            }
        }
        case USER_SUCCESS_AUTH: {
            return {
                ...state,
                user: action.payload,
                didInvalid: false,
                isFetching: false,
                Authentication: true
            }
        }
        case USER_INVALID_AUTH: {
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

export default reducerLogin;