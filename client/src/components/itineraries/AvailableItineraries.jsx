import React, { Component } from "react";
import Itinerary from "./Itinerary";
import CityHeader from "./cityHeader/CityHeader";
import Header from "../miniHeader/MiniHeader";

export default class AvItineraries extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <CityHeader></CityHeader>
        <Itinerary></Itinerary>
      </React.Fragment>
    );
  }
}
