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

const getFlights = async (filter) => {
	let text = "SELECT * FROM t_flights";
	let values = [];
	if(filter.origin){
		values.push(filter.origin);
		text += ' WHERE origin=$1'
	}
	else if(filter.destination){
		values.push(filter.destination);
		text += ' WHERE destination=$1'
	}
	return await sendQuery({ text: text , values: values});
};

const getFlight = async (id) => {
	return await sendQuery({ text: 'SELECT * FROM t_flights WHERE id=$1', values: [id] });
};

const deleteFlight = async (id) => {
	return await sendQuery({ text: 'DELETE FROM t_flights WHERE id=$1', values: [id] });
};

const addFlight = async (flight) => {
	await sendQuery({
		text: 'INSERT INTO t_flights VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
		values: [
			flight.id,
			flight.name,
			flight.origin,
			flight.destination,
			flight.departuretime,
			flight.arrivaltime,
			flight.airline,
			flight.terminal,
		],
	});
};

module.exports = {
	getFlights,
	getFlight,
	deleteFlight,
	addFlight,
};
