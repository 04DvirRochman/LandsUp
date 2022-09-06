"use strict";
const config = require("./config");

const Pool = require("pg").Pool;
async function connection() {
  const pool = new Pool({
    user: config.PGUSER,
    host: config.PGHOST,
    database: config.PGDATABASE,
    password: config.PGPASSWORD,
    port: config.PGPORT,
  });
  try {
    return pool;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  connection,
};
