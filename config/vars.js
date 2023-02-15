const path = require('path');
require('dotenv').config();

const {} = require('./config');
const abToRunMigration = process.argv[4];

let migrationPath = './';
switch (abToRunMigration) {
  case 'admin':
    migrationPath = path.resolve('./migrations/admin');
    break;
  case 'ledger':
    migrationPath = path.resolve('./migrations/ledger');
    break;
  default:
    return;
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  migrationPath,
};
