import React, { Component } from "react";
import { addFlightToDB } from "../services/flightService";
import DateTimePicker from 'react-datetime-picker';
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
        airline:"",
        terminal:"",
      },
    };
  }
  addFlight=(event)=>{
    event.preventDefault();
    addFlightToDB(this.state.flight)
  }
  handleFlightDataChange = (thingToChange, event) => {
    const value = event.target.value;
    let flight = { ...this.state.flight };
    flight[thingToChange] = value;
    this.setState({ flight: flight });
  };
  handeleTimeChange = (thingToChange,value)=>{
    console.log(value);
    let flight = { ...this.state.flight };
    flight[thingToChange] = value;
    this.setState({ flight: flight });
  }

  render() {
    return (
      <>
        {/* <form onSubmit={this.delete}>
          <p>input the Code of the flights that you want to delete</p>
          <input
            type="text"
            onChange={this.handelDeleteFlightInputChange}
            value={this.state.flightToDelete}
          />
          <input type="submit" value="Submit" />
        </form> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>add Flight</p>

        flight.name,
      flight.origin,
      flight.destination,
      flight.departuretime,
      flight.arrivaltime,
      flight.airline,
      flight.terminal,
        <form onSubmit={(e)=>this.addFlight(e)}>
          <p>name</p>
          <input
            type="text"
            onChange={(e) => this.handleFlightDataChange("name", e)}
            value={this.state.flight.name}
          />
          <p>origin</p>
          <input
            type="text"
            onChange={(e) => this.handleFlightDataChange("origin", e)}
            value={this.state.flight.origin}
          />
          <p>destination</p>
          <input
            type="text"
            onChange={(e) => this.handleFlightDataChange("destination", e)}
            value={this.state.flight.destination}
          />
          <p>departuretime</p>
          <DateTimePicker   onChange={(e) => this.handeleTimeChange("departuretime", e)}
          value={this.state.flight.departuretime }
            />
        
          <p>arrivaltime</p>
          <DateTimePicker   onChange={(e) => this.handeleTimeChange("arrivaltime", e)}
            value={this.state.flight.arrivaltime}
           />
          <p>airline</p>
          <input
            type="text"
            onChange={(e) => this.handleFlightDataChange("airline", e)}
            value={this.state.flight.airline}
          />
          <p>terminal</p>
          <input
            type="text"
            onChange={(e) => this.handleFlightDataChange("terminal", e)}
            value={this.state.flight.terminal}
          />
          <p>this is a butten</p>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}
