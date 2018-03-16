import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import RootRouter from '../rootRouter';
import theme from '../ui/themes/custom';

import './App.scss';

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
