import { combineReducers } from 'redux';

import reducerLogin from './components/reducerUser/reducerLogin';
import reducerMain from './components/Main/reducer';

export default combineReducers({
    reducerLogin,
    reducerMain
});
