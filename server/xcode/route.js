const express = require('express');
const goods = require('./mock/goods');

const xcodeRoute = express.Router();

xcodeRoute.get('/getList', (req, res) => {
  res.send(goods);
});

module.exports = xcodeRoute;
