/* eslint-disable @typescript-eslint/no-var-requires */
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerDocument from '../docs/api-spec.json';
import routes from './routes';

const swaggerUi = require('swagger-ui-express');
const app = express();

/** Middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

/* Swagger */
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Routes */
app.use('/api/', routes);

export default app;
