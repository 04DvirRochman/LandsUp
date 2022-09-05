import { Link } from "react-router-dom";
import React, { Component } from "react";
import styles from "./SiteHeader.css";
import { useLocation } from "react-router-dom";
const headerImgLink =
  "https://img.freepik.com/free-vector/plane-flying-clouds-skyscraper-buildings_107791-13138.jpg?w=2000";

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.links,
      currSite: props.links.Home,
    };
  }

  render() {
    return (
      <div>
        <div className="row zero-padding">
          <div className="container zero-padding position-relative ">
            <img className="img" src={headerImgLink} alt="site logo" />
            <div className="logo-text"> LandsUp </div>
          </div>
        </div>
        <div className="d-flex flex-row text-light bg-dark display-6 text-padding">
          <div className="col-3">
            <Link to={this.state.links.Home} className="nav-link active  ">
              <h4>Home</h4>
            </Link>
          </div>
          <div className="col-3">
            <Link to={this.state.links.MyFlights} className="nav-link active  ">
              <h4> My Flights</h4>
            </Link>
          </div>
          <div className="col-3">
            <Link to={this.state.links.About} className="nav-link active  ">
              <h4>About</h4>
            </Link>
          </div>
          <div className="col-3">
            <Link to={this.state.links.Login} className="nav-link active  ">
              <h4>Login</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
