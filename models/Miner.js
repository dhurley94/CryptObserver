module.exports = (sequelize, DataTypes) => {
    const Miner = sequelize.define('Coin', {
        pool: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        algorithm: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Miner;
}