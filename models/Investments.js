
module.exports = (sequelize, DataTypes) => {    
    const Investments = sequelize.define('Investments', {
        txid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        coin: {
            type: DataTypes.STRING,
        },
        pp_coin: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        amount_purchased: {
            type: DataTypes.FLOAT,
        },
  });
  return Investments;
}