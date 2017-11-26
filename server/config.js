const config = {
  // define the db things here
  db: {
    server: 'localhost',
    port: '5432',
    name: 'onehower_db',
    user: 'onehower_user',
    pwd: 'welcome',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  },
};

module.exports = config;
