const { models: { article, articlePhoto } } = require('../models');
const { Op } = require('sequelize');


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
                }
            ],
            limit: 10,
            order: [['createdAt', 'desc']]
        }
        return article.findAll(options);
    }


}

module.exports = ArticleService;
