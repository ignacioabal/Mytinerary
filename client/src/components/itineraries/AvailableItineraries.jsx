import React, { Component } from "react";
import Itinerary from "./Itinerary";
import Header from "../miniHeader/MiniHeader";

export default class AvItineraries extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Itinerary></Itinerary>
      </React.Fragment>
    );
  }
}
