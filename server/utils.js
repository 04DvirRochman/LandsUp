'use strict';
const validateFlight = (newFlight) => {
	return (
		!newFlight.name ||
		newFlight.name.length < 3 ||
		!newFlight.origin ||
		newFlight.origin.length < 3 ||
		!newFlight.destination ||
		newFlight.destination.length < 3 ||
		!newFlight.departuretime ||
		newFlight.departuretime.length < 10 ||
		!newFlight.arrivaltime ||
		newFlight.arrivaltime.length < 10 ||
		!newFlight.airline ||
		newFlight.airline.length < 3 ||
		!newFlight.terminal ||
		newFlight.terminal.length < 3
	);
};

module.exports = {
	validateFlight,
};
