import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './ui/themes/custom';

const Component = require('./components/App').default;

ReactDOM.render(
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
    ReactDOM.render(
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