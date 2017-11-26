const express = require('express');
const GroupService = require('../service/groupService');
const groupService = new GroupService();

const groupRoute = express.Router();

groupRoute.get('/getList', async (req, res) => {
  const { query: { name } } = req;
  const groups = await groupService.getGroupsAndUsers(name);
  res.send(groups);
});

module.exports = groupRoute;