module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
        len: [2, 50],
        unique: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
  });
  Users.associate = (models) => {
    Users.hasMany(models.Tasks);
  };
  return Users;
};
