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
    require('./article'),
    require('./articlePhoto'),
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// Relations
const {
    article,
    articlePhoto,
} = sequelize.models;

article.hasMany(articlePhoto, { foreignKey: { allowNull: false } });

module.exports = sequelize;
