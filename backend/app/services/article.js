const { models: { article } } = require('../models');
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
        const options = {};
        return article.findByPk(articleId, options);

    }

    static async getPopular() {
        const options = {
            limit: 10,
            order: [['createdAt', 'desc']]
        }
        return article.findAll(options);

    }


}

module.exports = ArticleService;
