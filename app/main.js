import { hydrate } from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ThemeProvider } from 'styled-components';

import theme from './ui/themes/custom';

const Component = require('./components/App').default;

const history = createHistory({ basename: '/' });

hydrate(
  <Router>
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Component {...window.__APP_INITIAL_STATE__} />
      </ThemeProvider>
    </AppContainer>
  </Router>,
 document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    hydrate(
      <Router>
        <AppContainer>
          <ThemeProvider theme={theme}>
            <Component {...window.__APP_INITIAL_STATE__} />
          </ThemeProvider>
        </AppContainer>
      </Router>,
  document.getElementById('root')
);
  });
}