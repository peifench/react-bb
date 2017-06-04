import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

import { data } from '../test-data';
import DataApi from '../data-api';
const store = new DataApi(data);

const serverRender = () => {
  return ReactDOMServer.renderToString(
    <App store={store} />
  );
};

export default serverRender;
