import React, { Component } from "react";
import "./CityHeader.css";

export default class CityHeader extends Component {
  render() {
    return (
      <div id="Main">
        <div id="Title" className="bg-dark">
          <h3 className="text-lead text-white">Barcelona</h3>
        </div>
      </div>
    );
  }
}
