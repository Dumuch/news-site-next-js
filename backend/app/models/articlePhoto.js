const { DataTypes } = require('sequelize');
const { article } = require('./article');

module.exports = (sequelize) => {
    sequelize.define('articlePhoto', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        articleId: {
            allowNull: false,
            type: DataTypes.UUID,
            references: {
                model: article,
                key: 'id',
            },
        },
        path: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });
};
