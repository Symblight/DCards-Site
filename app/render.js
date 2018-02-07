import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { AppContainer } from 'react-hot-loader';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './ui/themes/custom';
import Template from './template';
import App from './components/App';

export default function serverRenderer() {
  return (req, res) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.path} context={context}>
        <AppContainer>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AppContainer>
      </StaticRouter>
    );
    const styleTags = sheet.getStyleTags();
      res.status(200).send(Template({
        markup,
        styles: styleTags
      }));
  };
}