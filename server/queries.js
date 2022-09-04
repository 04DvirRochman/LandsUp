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

const getFlight = async (id) => {
	return await sendQuery({ text: 'SELECT * FROM t_flights WHERE id=$1', values: [id] });
};

const getSubscription = async (userid, flightid) => {
	return await sendQuery({
		text: 'SELECT * FROM t_subscriptions WHERE userid=$1 AND flightid=$2',
		values: [userid, flightid],
	});
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

const getUserID = async (name, password) => {
	return await sendQuery({
		text: 'SELECT id FROM t_users WHERE name=$1 and password=$2',
		values: [name, password],
	});
};

const getUserSubs = async (userid) => {
	return await sendQuery({
		text: 'SELECT flightid FROM t_subscriptions WHERE userid=$1',
		values: [userid],
	});
};
const createNewUser = async (user) => {
	return await sendQuery({
		text: 'INSERT INTO t_users VALUES($1,$2,$3,CURRENT_TIMESTAMP)',
		values: [user.id, user.name, user.password],
	});
};
const createSubscription = async (newSubscription) => {
	return await sendQuery({
		text: 'INSERT INTO t_subscriptions VALUES($1,$2,CURRENT_TIMESTAMP)',
		values: [newSubscription.userid, newSubscription.flightid],
	});
};

const deleteSubscription = async (userid, flightid) => {
	return await sendQuery({
		text: 'DELETE FROM t_subscriptions WHERE userid=$1 AND flightid=$2',
		values: [userid, flightid],
	});
};

module.exports = {
	getFlights,
	getFlight,
	deleteFlight,
	addFlight,
	getUserID,
	getUserSubs,
	createNewUser,
	createSubscription,
	deleteSubscription,
	getSubscription,
};

getSubscription('yhiej','hrteshgte').then(console.log)