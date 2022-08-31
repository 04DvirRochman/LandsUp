'use strict';
const { connection } = require('./database');
const Pool = require('pg').Pool;

const sendQuery = async (query) => {
	try {
		const con = await connection();
		const result = await con.query(query);
		return result.rows;
	} catch (err) {
		console.log(err);
	}
};

const getFlights = async () => {
	return await sendQuery({ text: 'SELECT * FROM t_flights' });
};
