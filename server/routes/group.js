const express = require('express');
const GroupService = require('../service/groupService');
const groupService = new GroupService();
const Response = require('./response');

const groupRoute = express.Router();

groupRoute.get('/getList', async (req, res) => {
  const { query: { name } } = req;
  const groups = await groupService.getGroupsAndUsers(name);
  res.send(new Response(groups));
});

module.exports = groupRoute;