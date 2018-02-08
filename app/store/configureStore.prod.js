import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'
 
/**
 * Configure the store for the PROD mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
 
  return store
}