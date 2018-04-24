import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import rootReducer from '../rootReducer';

/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
export default function configureStore(initialState) {
  const middleWare = [];
  middleWare.push(thunk);
  middleWare.push(loadingBarMiddleware());

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
    collapsed: true
  });
  middleWare.push(loggerMiddleware);
  const store = createStore(
    rootReducer, initialState,
    compose(applyMiddleware(...middleWare))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
