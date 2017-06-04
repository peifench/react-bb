import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/App';
import DataApi from '../data-api';

const serverRender = async () => {
  const resp = await axios.get('http://localhost:8000/data');
  const data = resp.data;
  const store = new DataApi(data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: data,
  };
};

export default serverRender;
