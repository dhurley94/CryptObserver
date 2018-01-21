
module.exports = (sequelize, DataTypes) => {    
    const Coin = sequelize.define('Coin', {
        coin: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usd_price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sat_price: {
            type: DataTypes.STRING,
        },
        ranking: {
            type: DataTypes.INTEGER,
        },
  });
  return Coin;
}