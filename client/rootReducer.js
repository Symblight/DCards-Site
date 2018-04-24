import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import reducerMain from './components/Main/reducer';
import reducerCard from './components/Card/reducer';
import reducerShops from './components/Shops/reducer';
import reducerShop from './components/Shop/reducer';
import reducerConfig from './components/mainReducer/reducer';

export default combineReducers({
  reducerMain,
  reducerCard,
  reducerShops,
  reducerShop,
  reducerConfig,
  loadingBar: loadingBarReducer
});
