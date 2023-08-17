const { models: { article, articlePhoto, category } } = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../models');
const { differenceInCalendarDays, sub, setDate, add } = require('date-fns');
const { zonedTimeToUtc } = require('date-fns-tz');


class ArticleService {
    static async get(articleId) {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1
                },
                {
                    attributes: ['title'],
                    model: category,
                }
            ]
        };
        return article.findByPk(articleId, options);

    }

    static async getPopular() {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1
                },
                {
                    attributes: ['title'],
                    model: category,
                }
            ],
            limit: 9,
            order: sequelize.random()
        }
        return article.findAll(options);
    }

    static async getLatest() {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1
                },
                {
                    attributes: ['title'],
                    model: category,
                }
            ],
            limit: 9,
            order: [['createdAt', 'desc']]
        }
        return article.findAll(options);
    }

    static async search(params) {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1
                },
                {
                    attributes: ['title'],
                    model: category,
                }
            ],
            limit: 12,
            offset: params?.page ? (Number(params.page) - 1) * 12 : 0,
            distinct: true,
        }

        let order;
        switch (params?.order) {
            case 'title-asc':
                order = [['title', 'asc']];
                break;
            case 'title-desc':
                order = [['title', 'desc']];
                break;
            default:
                order = [['createdAt', 'desc']];
        }

        const result = await article.findAndCountAll({ ...options, order });

        return {
            rows: result.rows,
            count: result.count,
        };
    }


}

module.exports = ArticleService;
