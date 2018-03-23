import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import RootRouter from '../rootRouter';
import theme from '../ui/themes/custom';

import withAuthorization from './proxy-props/withAuthorization';

import './App.scss';

@withAuthorization
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    );
  }
}

export default App;
