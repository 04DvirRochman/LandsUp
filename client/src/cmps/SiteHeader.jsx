import React, { Component } from "react";
import NavBar from "./NavBar"
import styles from "./SiteHeader.css";

const headerImgLink =
  "https://img.freepik.com/free-vector/plane-flying-clouds-skyscraper-buildings_107791-13138.jpg?w=2000";

export default function SiteHeader(props) {
  return (
    <div>
      <div className="row zero-padding">
        <div className="container zero-padding position-relative ">
          <img className="img" src={headerImgLink} alt="site logo" />
          <div className="logo-text"> LandsUp </div>
        </div>
      </div>
      <NavBar links={props.links} connectedUser={props.connectedUser} setConnectedUser={props.setConnectedUser} />
    </div>
  );
}
