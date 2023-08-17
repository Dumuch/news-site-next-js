const { models: { article, articlePhoto, category } } = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../models');


class ArticleService {
    static getAll(limit, offset = 0, title = '', order = [['name', 'asc']]) {
        const options = {
            limit,
            order,
            offset,
            where: {
                title: {
                    [Op.like]: `%${title}%`
                }
            }
        };
        return article.findAndCountAll(options);
    }

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


}

module.exports = ArticleService;
