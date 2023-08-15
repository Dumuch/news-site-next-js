const { Router } = require('express');
const article = require('./article');

module.exports = () => {
    const app = Router();
    article(app);
    return app;
};
