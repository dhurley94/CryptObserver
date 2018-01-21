'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Coin', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      coin: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      symbol: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      usd_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      sat_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      rank: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Coin')
  },
};
