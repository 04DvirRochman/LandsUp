import React, { Component } from "react";
import FightPreview from "./FightPreview";
import Accordion from "react-bootstrap/esm/Accordion";
import Spinner from "react-bootstrap/Spinner";

export default function FlightList(props) {
  const { flights, loadingFlights,connectedUser, subscriptions, onClickSubscribe } = props;
  let flightKeys;
  if (flights.length > 0) {
    flightKeys = Object.keys(flights[0]);
  }


    return (
        <div>
            <div className='bg-dark ps-4 pe-5'>
                <div className='tableheader'>
                    <h6 className='text-light tabletext'>Code</h6>
                    <h6 className='text-light tabletext'>Origin</h6>
                    <h6 className='text-light tabletext'>Destination</h6>
                    <h6 className='text-light tabletext'>Departure</h6>
                    <h6 className='text-light tabletext'>Arrival</h6>
                    <h6 className='text-light tabletext'>Airline</h6>
                    <h6 className='text-light tabletext'>Terminal</h6>
                </div>

            </div>

            <Accordion defaultActiveKey="0">
                {
                    (loadingFlights) ?
                        <Spinner className='m-4' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        (flights.length > 0) ?
                            flights.map((flight, index) => <FightPreview connectedUser={connectedUser} onClickSubscribe={onClickSubscribe} subscriptions={subscriptions} flight={flight} key={index} eventKey={index} />)
                            : <h6 className='m-4'>No flights has found</h6>
                }
            </Accordion>
        </div>
    );
}
