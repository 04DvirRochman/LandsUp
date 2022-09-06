import React, { Component } from 'react'
import FlightDetails from './FlightDetails';
import Button from 'react-bootstrap/esm/Button';
import Collapse from 'react-bootstrap/esm/Collapse';
import Accordion from 'react-bootstrap/esm/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';

export default function FightPreview(props) {

  const { flight,connectedUser, eventKey,subscriptions,onClickSubscribe } = props;
  let flightValues = Object.values(flight);
  return (
    <AccordionItem eventKey={eventKey}>
      <Accordion.Header>
        {flightValues.map((flightValue, index) => { if (index !== 0) { return <h4 key={index} className='tabletext'>{flightValue}</h4> } })}
      </Accordion.Header>
      <FlightDetails connectedUser={connectedUser} onClickSubscribe={onClickSubscribe} subscriptions={subscriptions} flight={flight} />
    </AccordionItem>
  )

}
