import favicon from 'serve-favicon';
import path from 'path';
import pg from 'pg';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpack from 'webpack';
import webpackConf from './webpack.config';

import apiServer from './server/api';

const app = express();
const compiler = webpack(webpackConf);

const port = process.env.PORT || '8080';

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, './server/favicon.ico')));
app.use(morgan('dev'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
}));
app.use(webpackHotMiddleware(compiler.compilers.find(comp => comp.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

/* APP API */
app.use('/', apiServer);

const server = http.createServer(app).listen(port, () => {
  console.info(`server is up on port: ${port}`);
});

export default app;