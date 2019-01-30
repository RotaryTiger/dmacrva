const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { isNumber } = require('underscore');

const { NODE_ENV, PORT } = process.env;
const env = NODE_ENV === 'production' ? 'production' : 'development';
const port = PORT && isNumber(PORT) ? PORT : parseInt(PORT);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('/', (request, response) => {
  const file = path.join(__dirname, '..', 'client', 'build', 'index.html');
  return response.status(200).sendFile(file);
});

app.get('*', (request, response) => {
  return response.status(404).send();
});

app.listen(port, () => {
  console.log(`[${env}] listening on port ${port}`);
});