import { APIURL } from "./utils";
const getFlightsFromDB = async (filter) => {
  let params = new URLSearchParams();
  if (filter) {
    if (filter.origin) {
      params.set("origin", filter.origin);
    } else if (filter.destination) {
      params.set("destination", filter.destination);
    }
  }
  try {
    const result = await fetch(`${APIURL}/api/flights?${params}`);
    const arr = await result.json();
    return arr;
  } catch (err) {
    return [];
  }
};

const getFlightFromDB = async (id) => {
  try {
    const result = await fetch(`${APIURL}/api/flight/${id}`);
    const flight = await result.json();
    return flight;
  } catch (err) {}
};

const addFlightToDB = async (flight) => {
  try {
    await fetch(`${APIURL}/api/flight`, {
      method: "POST",
      body: JSON.stringify(flight),
      headers: { "content-type": "application/json" },
    });
  } catch (err) {}
};

const removeFlightFromDB = async (id) => {
  await fetch(`${APIURL}/api/flight/${id}`, { method: "DELETE" });
};

export { getFlightsFromDB, getFlightFromDB, addFlightToDB, removeFlightFromDB };
