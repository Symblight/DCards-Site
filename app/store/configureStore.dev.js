import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../rootReducer';

/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger), compose());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
