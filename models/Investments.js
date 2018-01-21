
module.exports = (sequelize, DataTypes) => {    
    const Investments = sequelize.define('Invesments', {
        txid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        coin: {
            type: DataTypes.STRING,
        },
        pp_coin: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        price_usd: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        amount_purchased: {
            type: DataTypes.DOUBLE,
        },
        
  });
  return Investments;
}