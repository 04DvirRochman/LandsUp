"use strict";
const Pool = require("pg").Pool;
async function connection() {
	const pool = new Pool({
		user: 'postgres',
		host: 'localhost',
		database: 'postgres',
		password: 'pgsql10',
		port: 5432,
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
