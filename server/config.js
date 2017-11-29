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
  // define the jwt things here
  jwt: {
    // add the secret here
    secret: 'scret',
    // maybe 1 day time
    exp: 1 * 24 * 60 * 60,
  },
};

module.exports = config;
