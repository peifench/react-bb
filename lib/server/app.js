import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, config.host, function listenHandler() {
  console.info(`App is running on ${config.port}...`);
});