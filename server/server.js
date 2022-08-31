'use strict';
const express = require('express');
const shortid = require('shortid');
const PORT = 3000;
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send('test');
    });

app.listen(PORT, function (err) {
	if (err) {
		console.log('Error in server setup');
	}
	console.log('Server listening on Port', PORT);
});
