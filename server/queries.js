"use strict";
const { connection } = require("./database");

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
  if (filter.origin) {
    values.push(filter.origin);
    text += " WHERE origin=$1";
  } else if (filter.destination) {
    values.push(filter.destination);
    text += " WHERE destination=$1";
  }
  return await sendQuery({ text: text, values: values });
};

const getFlightsByFlightsIds = async (flightsId, filter) => {
  let text = "SELECT * FROM t_flights Where ( ";

  if (flightsId && flightsId.length > 0) {
    flightsId.forEach((flightId, index) => {
      if (index > 0) {
        text += " OR ";
      }
      text += ` id='${flightId}' `;
    });
  } else {
    text += `id=' '`;
  }
  text += ") ";
  let values = [];
  if (filter) {
    if (filter.origin) {
      values.push(filter.origin);
      text += " AND origin=$1";
    } else if (filter.destination) {
      values.push(filter.destination);
      text += " AND destination=$1";
    }
  }
  return await sendQuery({ text: text, values: values });
};

const getFlight = async (id) => {
  return await sendQuery({
    text: "SELECT * FROM t_flights WHERE id=$1",
    values: [id],
  });
};

const getSubscription = async (userid, flightid) => {
  return await sendQuery({
    text: "SELECT * FROM t_subscriptions WHERE userid=$1 AND flightid=$2",
    values: [userid, flightid],
  });
};

const deleteFlight = async (id) => {
  return await sendQuery({
    text: "DELETE FROM t_flights WHERE id=$1",
    values: [id],
  });
};

const addFlight = async (flight) => {
  await sendQuery({
    text: "INSERT INTO t_flights VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
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
    text: "SELECT id FROM t_users WHERE name=$1 and password=$2",
    values: [name, password],
  });
};

const getUserSubs = async (userid) => {
  return await sendQuery({
    text: "SELECT flightid FROM t_subscriptions WHERE userid=$1",
    values: [userid],
  });
};
const createNewUser = async (user) => {
  return await sendQuery({
    text: "INSERT INTO t_users VALUES($1,$2,$3,CURRENT_TIMESTAMP)",
    values: [user.id, user.name, user.password],
  });
};
const createSubscription = async (newSubscription) => {
  return await sendQuery({
    text: "INSERT INTO t_subscriptions VALUES($1,$2,CURRENT_TIMESTAMP)",
    values: [newSubscription.userid, newSubscription.flightid],
  });
};

const deleteSubscription = async (userid, flightid) => {
  return await sendQuery({
    text: "DELETE FROM t_subscriptions WHERE userid=$1 AND flightid=$2",
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
  getFlightsByFlightsIds,
};
