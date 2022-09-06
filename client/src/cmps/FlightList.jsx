import React, { Component } from "react";
import FightPreview from "./FightPreview";
import Accordion from "react-bootstrap/esm/Accordion";
import Spinner from "react-bootstrap/Spinner";

export default function FlightList(props) {
  const { flights, loadingFlights, subscriptions, onClickSubscribe } = props;
  let flightKeys;
  if (flights.length > 0) {
    flightKeys = Object.keys(flights[0]);
  }


    return (
        <div>
            <div className='bg-dark ps-4 pe-5'>
                <div className='tableheader'>
                    <h6 className='text-light tabletext'>code</h6>
                    <h6 className='text-light tabletext'>origin</h6>
                    <h6 className='text-light tabletext'>destination</h6>
                    <h6 className='text-light tabletext'>departure</h6>
                    <h6 className='text-light tabletext'>arrival</h6>
                    <h6 className='text-light tabletext'>airline</h6>
                    <h6 className='text-light tabletext'>terminal</h6>
                </div>

            </div>

            <Accordion defaultActiveKey="0">
                {
                    (loadingFlights) ?
                        <Spinner className='m-4' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        (flights.length > 0) ?
                            flights.map((flight, index) => <FightPreview onClickSubscribe={onClickSubscribe} subscriptions={subscriptions} flight={flight} key={index} eventKey={index} />)
                            : <h6 className='m-4'>No flights has found</h6>
                }
            </Accordion>
        </div>
    );
}
