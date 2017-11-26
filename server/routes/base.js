const express = require('express');
const BaseDao = require('../dao/baseDao');
const Response = require('./response');
const { getDao } = require('../dao/daoRegistry');

const baseRoute = express.Router();

baseRoute.get('/get/:id', async (req, res) => {
  const { params: { id }, baseUrl } = req;
  const dao = getDao(baseUrl.slice(1));
  const item = await dao.get(id);
  res.send(new Response(item));
});

baseRoute.post('/create', async (req, res) => {
  const { baseUrl, body } = req;
  const dao = getDao(baseUrl.slice(1));
  const item = await dao.create(body);
  res.send(new Response(item));
});

baseRoute.put('/update', async (req, res) => {
  const { baseUrl, body } = req;
  const dao = getDao(baseUrl.slice(1));
  const { id, ...fields } = body;
  const item = await dao.update(id, fields);
  res.send(new Response(item));
});

baseRoute.delete('/delete', async (req, res) => {
  const { baseUrl, body } = req;
  const dao = getDao(baseUrl.slice(1));
  const { id } = body;
  const count = await dao.delete(id);

  let response = new Response(count);
  if (count === 0) {
    response.fail({
      message: `Can not find model where id = ${id}`
    });
  }
  res.send(response);
});

baseRoute.get('/list', async (req, res) => {
  const { baseUrl, query } = req;
  const dao = getDao(baseUrl.slice(1));
  const result = await dao.list(query);
  res.send(new Response(result));
});

module.exports = baseRoute;