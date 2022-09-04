'use strict';
const express = require('express');
const shortid = require('shortid');
const {
	getFlights,
	getFlight,
	addFlight,
	deleteFlight,
	getUserID,
	getUserSubs,
	createNewUser,
	createSubscription,
	deleteSubscription,
	getSubscription,
} = require('./queries');
const { validateFlight, validateUser } = require('./utils');
const PORT = 3000;
const app = express();
const cors = require('cors');
const e = require('express');
app.use(express.json());
app.use(cors());

app.get('/api/flights', async (req, res) => {
	const flights = await getFlights();
	if (!flights || !flights.length) {
		res.status(404).send('Flights do not exist');
	} else {
		res.send(flights);
	}
});

app.get('/api/flight/:id', async (req, res) => {
	const id = req.params.id;
	const flight = await getFlight(id);
	if (flight.length === 0) {
		res.status(404).send(`flight ${id} not found`);
	} else {
		res.send(flight[0]);
	}
});

app.get('/api/user', async (req, res) => {
	const name = req.query.name;
	const password = req.query.password;
	const user = await getUserID(name, password);
	if (user.length === 0) {
		res.status(404).send('invalid username or password');
	} else {
		res.send(user[0]);
	}
});

app.get('/api/subscription', async (req, res) => {
	const userid = req.query.userid;
	const flightIds = await getUserSubs(userid);
	if (flightIds.length === 0) {
		res.status(404).send('invalid user or no flights subscribed');
	} else {
		res.send(flightIds);
	}
});

app.post('/api/flight', async (req, res) => {
	const newFlight = req.body;
	newFlight.id = shortid.generate();
	if (validateFlight(newFlight)) {
		res.send('invalid properties');
	} else {
		await addFlight(newFlight);
		res.send(newFlight);
	}
});

app.post('/api/user', async (req, res) => {
	const newUser = req.body;
	newUser.id = shortid.generate();
	if (validateUser(newUser)) {
		res.send('invalid properties');
	} else {
		await createNewUser(newUser);
		res.send(newUser);
	}
});
app.post('/api/subscription', async (req, res) => {
	const newSubscription = req.body;
	await createSubscription(newSubscription);
	res.send(newSubscription);
});

app.delete('/api/flight/:id', async (req, res) => {
	const id = req.params.id;
	const flight = await getFlight(id);
	if (flight.length === 0) {
		res.status(404).send(`Flight ${id} not found`);
	} else {
		await deleteFlight(id);
		res.send(flight)[0];
	}
});

app.delete('/api/subscription', async (req, res) => {
	const userid = req.query.userid;
	const flightid = req.query.flightid;
	const subscription = await getSubscription(userid, flightid);
	if (subscription.length === 0) {
		res.status(404).send('subscription not found');
	} else {
		await deleteSubscription(userid, flightid);
		res.send(subscription[0]);
	}
});

app.listen(PORT, function (err) {
	if (err) {
		console.log('Error in server setup');
	}
	console.log('Server listening on Port', PORT);
});
