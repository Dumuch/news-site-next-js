const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const cors = require('cors');
const routes = require('./routes');
const createError = require('http-errors');
const helmet = require('helmet');
const app = express();

process.env.TZ = 'Etc/Universal'; // UTC +00:00

app.use((req, res, next) => (req.originalUrl.includes('webhook') ? next() : bodyParser.json()(req, res, next)));
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(
    cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        allowedHeaders: ['*'],
    }),
);

app.use(helmet());
app.use(routes());

// App version
app.use((data, req, res, next) => {
    if (data instanceof Error) {
        const err = data;
        createError.isHttpError(err) ? console.warn(err) : console.error(err);
        res.status(err.status || 500);
        res.json({ errors: { message: err.message } });
    } else {
        res.json({ data, appVersion: config.app.version });
    }
});

app.listen(config.server.port, () => {
    console.log(`Server listening on port: ${config.server.port}`);
});

module.exports = app;
