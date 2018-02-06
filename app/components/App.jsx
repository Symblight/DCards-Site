import React, { Component } from 'react';
import './App.scss';

import RootRouter from '../rootRouter';
import { ThemeProvider } from 'styled-components';
import theme from '../ui/themes/custom';

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
