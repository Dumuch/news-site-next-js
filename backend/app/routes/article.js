const { Router } = require('express');
const { ArticleService } = require('../services');
const { isUuid } = require('../middlewares');
const createError = require('http-errors');
const route = Router();

module.exports = (app) => {
    app.use('/articles', route);

    route.get('/get-popular', async function(req, res, next) {
        try {
            next(await ArticleService.getPopular());
        } catch (e) {
            next(e);
        }
    });

    route.get('/get-latest', async function(req, res, next) {
        try {
            next(await ArticleService.getLatest());
        } catch (e) {
            next(e);
        }
    });

    route.get('/search', async function (req, res, next) {
        try {
            next(await ArticleService.search(req.query));
        } catch (e) {
            next(e);
        }
    });

    route.get('/get-categories', async function (req, res, next) {
        try {
            next(await ArticleService.getCategories());
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
