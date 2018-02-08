import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'

import theme from './ui/themes/custom';
import configureStore from './store/configureStore';

let store = configureStore();

const Component = require('./components/App').default;

const render = (Component) => {
  const renderMethod = !!module.hot ? ReactDOM.hydrate: ReactDOM.render
  renderMethod(
    <Router>
      <AppContainer>
        <ThemeProvider theme = {theme}>
          <Provider store = {store}>
            <Component />
          </Provider>
        </ThemeProvider>
      </AppContainer>
    </Router>,
    document.getElementById('root')
  );
}

render(Component);