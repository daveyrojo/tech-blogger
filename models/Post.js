const { Sequelize, Model, DataTypes } = require('sequelize');
const { User } = require('.');
const sequelize = require('../config/config');
// TODO: YOUR CODE HERE
    // userId

class Post extends Model {
  // Maybe empty/non existent?
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DatayTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataType.INTEGER,
        allowNull: false,
        referecnes: {
            model: 'User',
            key: 'id'
        }
    },
   
})


module.exports = Post;
