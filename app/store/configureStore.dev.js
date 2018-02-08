import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from '../rootReducer'
 
/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */

const middlewares = [logger, thunk];

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    // Add other middleware on this line...
   // window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  )
  )
 
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }
  return store
}