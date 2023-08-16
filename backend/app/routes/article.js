const { Router } = require('express');
const { ArticleService } = require('../services');
const { isUuid } = require('../middlewares');
const createError = require('http-errors');
const route = Router();

module.exports = (app) => {
    app.use('/articles', route);

    route.get('/', async function(req, res, next) {
        try {
            next(await ArticleService.getAll(req.body?.limit, req.body?.offset, req.body?.title, req.body?.order));
        } catch (e) {
            next(e);
        }
    });

    route.get('/get-popular', async function(req, res, next) {
        console.log(req.headers);
        try {
            next(await ArticleService.getPopular());
        } catch (e) {
            next(e);
        }
    });

    route.get('/:id', isUuid('id'), async function(req, res, next) {
        try {
            const article = await ArticleService.get(req.params.id);
            if (!article) {
                return next(createError(404));
            }
            next(article);
        } catch (e) {
            next(e);
        }
    });

};
