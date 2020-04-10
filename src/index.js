import express from 'express';
import { corsHandler, errorHandler, processingTimeHandler } from './middlewares';
import routesHandler from './routes';

const app = express();
app.use(corsHandler);
app.use(express.json());// parse request data to JSON object
app.use(processingTimeHandler);

app.use('/api/v1', routesHandler(express.Router()), errorHandler);

const server = app.listen(process.env.PORT || 2020, (error) => {
  console.log(error ? `Error: ${error}...` : `Listening on PORT: ${server.address().port}`);// eslint-disable-line no-console
});

module.exports = server;
