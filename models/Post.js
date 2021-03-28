const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
// TODO: YOUR CODE HERE
    // userId

class Post extends Model {
  // Maybe empty/non existent?
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    referecnes: {
      model: "User",
      key: "id",
    },
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Post",
});


module.exports = Post;
