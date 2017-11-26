const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const Song = sequelize.define('song', {
  name: Sequelize.STRING,
  singer: Sequelize.STRING,
  audio: Sequelize.STRING,
  lyric: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
});

module.exports = Song;