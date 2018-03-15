import { combineReducers } from 'redux';

import reducerLogin from './components/reducerUser/reducerLogin';
import reducerMain from './components/Main/reducer';
import reducerCard from './components/Card/reducer';
import reducerShops from './components/Shops/reducer';

export default combineReducers({
  reducerLogin,
  reducerMain,
  reducerCard,
  reducerShops
});
