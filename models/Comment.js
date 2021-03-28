const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
// TODO: YOUR CODE HERE
  // userId
  // postId

class Comment extends Model {
    // Maybe empty/non existent?
}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    //not sure if CommentId is needed
  },
  commentBody: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Comment",
});


module.exports = Comment;
