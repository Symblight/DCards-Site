import React from 'react';

import { ServerStyleSheet } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Template from './template';
import App from './components/App';

export default function serverRenderer() {
  return (req, res) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    );
    const styleTags = sheet.getStyleTags();
    res.status(200).send(Template({
      markup,
      styles: styleTags
    }));
  };
}