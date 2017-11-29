const express = require('express');
const UserService = require('../service/userService');
const userService = new UserService();
const Response = require('./response');

const userRoute = express.Router();

userRoute.get('/getList', async (req, res) => {
  const { query: { name } } = req;
  const users = await userService.getListByName(name);
  res.send(new Response(users));
});

userRoute.post('/register', async (req, res, next) => {
  const { body: { username, password } } = req;
  const response = new Response();
  try {
    const result = await userService.register(username, password);
    res.send(response.successResult(result));
  } catch (e) {
    next(e);
  }
});

userRoute.post('/login', async (req, res, next) => {
  const { body: { username, password } } = req;
  const response = new Response();
  try {
    const result = await userService.login(username, password);
    res.send(response.successResult(result));
  } catch (e) {
    next(e);
  }
});

module.exports = userRoute;
