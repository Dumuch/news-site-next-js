const {
    models: { article, articlePhoto, category },
} = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../models');

class ArticleService {
    static async get(articleId) {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1,
                },
                {
                    attributes: ['id', 'title'],
                    model: category,
                },
            ],
        };
        return article.findByPk(articleId, options);
    }

    static async getPopular() {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1,
                },
                {
                    attributes: ['id', 'title'],
                    model: category,
                },
            ],
            limit: 9,
            order: sequelize.random(),
        };
        return article.findAll(options);
    }

    static async getLatest() {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1,
                },
                {
                    attributes: ['id', 'title'],
                    model: category,
                },
            ],
            limit: 9,
            order: [['createdAt', 'desc']],
        };
        return article.findAll(options);
    }

    static async search(params) {
        const options = {
            include: [
                {
                    attributes: ['id', 'path', 'name'],
                    model: articlePhoto,
                    limit: 1,
                },
                {
                    attributes: ['id', 'title'],
                    model: category,
                },
            ],
            limit: 12,
            offset: params?.page ? (Number(params.page) - 1) * 12 : 0,
            distinct: true,
        };

        const whereParams = {
            [Op.and]: {},
        };

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

        if (params?.q) {
            whereParams[Op.and]['title'] = {
                [Op.iLike]: `%${params.q}%`,
            };
        }

        if (params?.categoryId) {
            whereParams[Op.and]['categoryId'] = params.categoryId;
        }

        const result = await new Promise((resolve, reject) => {
            article
                .findAndCountAll({ ...options, where: whereParams, order })
                .then((result) => {
                    setTimeout(() => {
                        resolve(result);
                    }, 2500);
                })
                .catch((err) => reject(err));
        });
        return {
            rows: result.rows,
            count: result.count,
        };
    }

    static async getCategories() {
        const options = {
            attributes: ['id', 'title'],
            order: [['title', 'asc']],
        };
        return category.findAll(options);
    }
}

module.exports = ArticleService;
