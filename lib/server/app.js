import express from 'express';
import config from './config';
import serverRender from '../renderers/serverRender';
import { data } from '../test-data';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, config.host, function listenHandler() {
  console.info(`App is running on ${config.port}...`);
});
