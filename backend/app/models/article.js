const {  DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'article',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            description: {
                allowNull: true,
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
            deletedAt: {
                type: DataTypes.DATE,
            },

        },
        {
            paranoid: true,
        }
    );
};
