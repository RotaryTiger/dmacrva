import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

const { NODE_ENV, PORT } = process.env;
const app = express();

app.set('port', PORT || 5000);
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (request, response) => (response.sendFile(path.join(__dirname, '..', 'public', 'index.html'))));
app.use('*', (request, response) => (response.sendStatus(404)));

app.listen(app.get('port'), () => {
  console.log(`[${NODE_ENV}] listening on port ${app.get('port')}`);
});
