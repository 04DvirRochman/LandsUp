import React, { Component } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import Button from "react-bootstrap/esm/Button";

export default function FlightDetails(props) {
  const { flight, connectedUser, onClickSubscribe, subscriptions } = props;
  let isSubscribed = subscriptions.some((sub) => sub.id === flight.id);

  return (
    <AccordionBody className="text-start">
      <h3 className="detailheader">
        {flight.name} {flight.origin}-{flight.destination}
      </h3>
      <p className="mb-0 detailtext">Departure time: {flight.departuretime}</p>
      <p className="mb-0 detailtext">Arrival time: {flight.arrivaltime}</p>
      <p className="mb-0 detailtext">Airline: {flight.airline}</p>
      <p className="mb-0 detailtext">terminal: {flight.terminal}</p>
      <div className="d-flex justify-content-end">
        {connectedUser === "000000" ? (
          <h4 className="detailtext">Log in to subscribe</h4>
        ) : (
          <Button
            onClick={() => onClickSubscribe(isSubscribed, flight)}
            className={"btn btn-" + (isSubscribed ? "danger" : "primary")}
          >
            <p className="buttontext">
              {isSubscribed ? "Unsubscribe" : "Subscribe"}{" "}
            </p>
          </Button>
        )}
      </div>
    </AccordionBody>
  );
}
