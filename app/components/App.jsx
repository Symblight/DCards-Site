import React, { Component } from 'react';

import RootRouter from '../rootRouter';
import theme from '../ui/themes/custom';
import { ThemeProvider } from 'styled-components';

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
