import { 
    USER_SUCCESS_AUTH,
    USER_REQUEST_AUTH,
    USER_INVALID_AUTH
} from '../../constants';

const requestLogin = () => {
	return {
		type: USER_REQUEST_AUTH
	}
};

const successLogin = (json) => {
	return {
		type: USER_SUCCESS_AUTH,
		payload: json.data
	}
};

const invalidLogin = (json) => {
	return {
		type: USER_INVALID_AUTH,
		payload: json
	}
};

export const fetchLoginUser = (user) => {
    return (dispatch) => {
        // dispatch(requestLogin);
        dispatch(successLogin(user));
    };
};