"use strict";
const express = require("express");
const shortid = require("shortid");
const {
  getFlights,
  getFlight,
  addFlight,
  deleteFlight,
  orderByFlights,
} = require("./queries");
const { validateFlight } = require("./utils");
const PORT = 3000;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/api/flights", async (req, res) => {
  const flights = await getFlights();
  if (!flights || !flights.length) {
    res.status(404).send("Flights do not exist");
  } else {
    res.send(flights);
  }
});

app.get("/api/flights/:orderBy/:order", async (req, res) => {
  const flights = await orderByFlights(req.params.orderBy, req.params.order);
  if (!flights || !flights.length) {
    res.send("Invalid parameters");
  } else {
    res.send(flights);
  }
});

app.get("/api/flight/:id", async (req, res) => {
  const id = req.params.id;
  const flight = await getFlight(id);
  if (flight.length === 0) {
    res.status(404).send(`flight ${id} not found`);
  } else {
    res.send(flight[0]);
  }
});

app.post("/api/flight", async (req, res) => {
  const newFlight = req.body;
  newFlight.id = shortid.generate();
  if (validateFlight(newFlight)) {
    res.send("invalid properties");
  } else {
    await addFlight(newFlight);
    res.send(newFlight);
  }
});

app.delete("/api/flight/:id", async (req, res) => {
  const id = req.params.id;
  const flight = await getFlight(id);
  if (flight.length === 0) {
    res.status(404).send(`Flight ${id} not found`);
  } else {
    await deleteFlight(id);
    res.send(flight)[0];
  }
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});
