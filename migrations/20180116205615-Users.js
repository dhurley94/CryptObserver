'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      currency: {
        type: Sequelize.TEXT,
      },
      privilege: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users')
  },
};
