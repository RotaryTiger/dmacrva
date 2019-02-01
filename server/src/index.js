import 'babel-polyfill';

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { isNumber } from 'underscore';

import routes from './routes';

const { NODE_ENV, PORT } = process.env;
const env = NODE_ENV === 'production' ? 'production' : 'development';
const port = PORT && isNumber(PORT) ? PORT : parseInt(PORT, 10);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/api', routes);

app.get('/*', (request, response) => {
  const file = path.join(__dirname, '..', 'client', 'build', 'index.html');
  return response.status(200).sendFile(file);
});

app.listen(port, () => {
  console.log(`[${env}] listening on port ${port}`);
});
