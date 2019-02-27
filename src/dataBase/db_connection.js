const { Pool } = require('pg');
const url = require('url');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

let urldb = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  urldb = process.env.TEST_URL;
}

const params = url.parse(urldb);

const options = {
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname || 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

module.exports = new Pool(options);
