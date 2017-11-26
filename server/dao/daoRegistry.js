const fs = require('fs');
const path = __dirname;
const excludeFiles = ['baseDao', 'daoHelper', 'daoRegistry'];

const files = fs.readdirSync(path);
const daoEntitiesMap = {};
files.forEach((filename) => {
  const pos = filename.indexOf('.');
  const filePrefix = filename.substr(0, pos);
  const filePostfix = filename.substr(pos + 1);
  if (excludeFiles.includes(filePrefix) || filePrefix.length < 1 || filePostfix.length < 1 || filePostfix != 'js') return;
  
  const Model = require(`${path}/${filePrefix}`);

  if (typeof Model === 'function') {
    // then, store dao classes
    const enity = new Model();
    // we remove the `dao` postfix name
    const key = filePrefix.slice(0, filePrefix.length - 3);
    daoEntitiesMap[key] = enity;
  }
});

function getDao(entityType) {
  return daoEntitiesMap[entityType];
}

module.exports = {
  getDao,
};