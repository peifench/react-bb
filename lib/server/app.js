import express from 'express';
import config from './config';
import serverRender from '../renderers/serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initalContent = serverRender();
  res.render('index', { initalContent });
});

app.listen(config.port, config.host, function listenHandler() {
  console.info(`App is running on ${config.port}...`);
});
