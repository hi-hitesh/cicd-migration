require('dotenv').config();

module.exports = {
  ledger: {
    username: process.env.LEDGER_DB_USERNAME,
    password: process.env.LEDGER_DB_PASSWORD,
    database: process.env.LEDGER_DB_NAME,
    host: process.env.LEDGER_DB_HOST_URL,
    logging: false,
    dialect: 'postgres',
    timezone: 'Asia/Calcutta',
  },
  admin: {
    sername: process.env.ADMIN_DB_USERNAME,
    password: process.env.ADMIN_DB_PASSWORD,
    database: process.env.ADMIN_DB_NAME,
    host: process.env.ADMIN_DB_HOST_URL,
    logging: false,
    dialect: 'postgres',
    timezone: 'Asia/Calcutta',
  },
};
