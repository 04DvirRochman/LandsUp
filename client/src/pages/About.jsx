import React, { Component } from "react";
import PersonalInfoList from "../cmps/PersonalInfoList";

const personalInfo = [
  {
    img: "https://ibasketball.co.il/wp-content/uploads/2020/10/S93008-99x128.jpg",
    text: "my name is guy and i like to eat food ",
    name: "Guy",
  },
  {
    img: "https://ibasketball.co.il/wp-content/uploads/2020/10/S93008-99x128.jpg",
    text: "my name is dan and i love tea ",
    name: "Dan",
  },
  {
    img: "https://c.tenor.com/M0BNebVAQxoAAAAC/sqid-sq.gif",
    text: "my poop boddy.com",
    name: "Dvir",
  },
];

export default class About extends Component {
  render() {
    return <PersonalInfoList info={personalInfo} />;
  }
}
