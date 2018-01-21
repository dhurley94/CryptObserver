
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.TEXT,
    },
    privilege: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });
  return User;
};
