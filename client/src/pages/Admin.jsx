import React, { Component } from "react";
import { addFlightToDB } from "../services/flightService";
import DateTimePicker from "react-datetime-picker";
import Form from "react-bootstrap/esm/Form";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightToDelete: "",
      flight: {
        name: "",
        origin: "",
        destination: "",
        departuretime: "",
        arrivaltime: "",
        airline: "",
        terminal: "",
      },
    };
  }
  addFlight = (event) => {
    event.preventDefault();
    addFlightToDB(this.state.flight);
  };
  handleFlightDataChange = (thingToChange, event) => {
    const value = event.target.value;
    let flight = { ...this.state.flight };
    flight[thingToChange] = value;
    this.setState({ flight: flight });
  };
  handeleTimeChange = (thingToChange, value) => {
    console.log(value);
    let flight = { ...this.state.flight };
    flight[thingToChange] = value;
    this.setState({ flight: flight });
  };

  render() {
    return (
      <div className="page text-white">
        <Container className="my-5">
          <h1 className="">Add Flight</h1>
          <Form
            className="col align-items-center"
            onSubmit={(e) => this.addFlight(e)}
          >
            <Form.Group className="mt-3">
              <Form.Label className="">name</Form.Label>
              <Form.Control
                className="px-5 w-50 mx-auto"
                type="text"
                onChange={(e) => this.handleFlightDataChange("name", e)}
                value={this.state.flight.name}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="">origin</Form.Label>
              <Form.Control
                className="px-5 w-50 mx-auto"
                type="text"
                onChange={(e) => this.handleFlightDataChange("origin", e)}
                value={this.state.flight.origin}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="">destination</Form.Label>
              <Form.Control
                className="px-5 w-50 mx-auto"
                type="text"
                onChange={(e) => this.handleFlightDataChange("destination", e)}
                value={this.state.flight.destination}
              />
            </Form.Group>

            <p >departuretime</p>
            <DateTimePicker
              onChange={(e) => this.handeleTimeChange("departuretime", e)}
              value={this.state.flight.departuretime}
            />

            <p className="">arrivaltime</p>
            <DateTimePicker
              onChange={(e) => this.handeleTimeChange("arrivaltime", e)}
              value={this.state.flight.arrivaltime}
            />
            <Form.Group className="mt-3">
              <Form.Label className="">airline</Form.Label>
              <Form.Control
                className="px-5 w-50 mx-auto"
                type="text"
                onChange={(e) => this.handleFlightDataChange("airline", e)}
                value={this.state.flight.airline}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="">terminal</Form.Label>
              <Form.Control
                className="px-5 w-50 mx-auto"
                type="text"
                onChange={(e) => this.handleFlightDataChange("terminal", e)}
                value={this.state.flight.terminal}
              />
            </Form.Group>

            <Button className="mt-3" type="submit" value="Submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
