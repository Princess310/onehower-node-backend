const express = require('express');
const UserService = require('../service/userService');
const userService = new UserService();

const userRoute = express.Router();

userRoute.get('/getList', async (req, res) => {
  const { query: { name } } = req;
  const users = await userService.getListByName(name);
  res.send(users);
});

module.exports = userRoute;