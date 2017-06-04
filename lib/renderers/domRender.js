import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

import { data } from '../test-data';
import DataApi from '../data-api';
const store = new DataApi(data);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
