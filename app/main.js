import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import _ from 'lodash';

import theme from './ui/themes/custom';
import configureStore from './store/configureStore';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

const App = require('./components/App').default;

const render = (Component) => {
  const renderMethod = module.hot ? ReactDOM.hydrate : ReactDOM.render;
  renderMethod(
    <Router>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component />
          </Provider>
        </ThemeProvider>
      </AppContainer>
    </Router>,
    document.getElementById('root')
  );
};

render(App);
