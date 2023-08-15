require('dotenv').config();

const config = {
    app: {
        version: process.env.APP_VERSION || '0000000001',
        environment: process.env.ENV,
    },
    server: {
        port: process.env.SERVER_PORT || 3000,
    },
};

module.exports = config;
