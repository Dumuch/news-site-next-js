const dbConfig = require('../config/sequelize');
const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: config.app.environment === 'dev' ? console.log : false,
});

const modelDefiners = [
    require('./category'),
    require('./article'),
    require('./articlePhoto'),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

const {
    category,
    article,
    articlePhoto,
} = sequelize.models;

article.hasMany(articlePhoto);
articlePhoto.belongsTo(article);

article.belongsTo(category);

module.exports = sequelize;
