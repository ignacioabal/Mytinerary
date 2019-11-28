import React, { Component } from "react";
import CityList from "./CityList";
import HomeButton from "../util/HomeButton";
import "./Cities.css";

import Header from "../miniHeader/MiniHeader";

class Cities extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <CityList></CityList>
        <HomeButton></HomeButton>
      </React.Fragment>
    );
  }
}

export default Cities;
