import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ThemeProvider } from 'styled-components';

import theme from './ui/themes/custom';

const Component = require('./components/App').default;

const history = createHistory({ basename: '/' });

const render = (Component) => {
  const renderMethod = !!module.hot ? ReactDOM.hydrate: ReactDOM.render
  renderMethod(
    <Router>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Component {...window.__APP_INITIAL_STATE__} />
        </ThemeProvider>
      </AppContainer>
    </Router>,
    document.getElementById('root')
  );
}