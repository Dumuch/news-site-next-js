const { Router } = require('express');
const { ArticleService} = require('../services');
const route = Router();

module.exports = (app) => {
    app.use('/articles', route);

    route.get('/', async function (req, res, next) {
        try {
            next(await ArticleService.getAll(req.body?.limit, req.body?.offset, req.body?.title, req.body?.order));
        } catch (e) {
            next(e);
        }
    });

    route.get('/get-popular', async function (req, res, next) {
        console.log(req.headers)
        try {
            next(await ArticleService.getPopular());
        } catch (e) {
            next(e);
        }
    });

};
