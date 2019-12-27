import React, { Component } from "react";
import "./CityHeader.css";

export default function CityHeader(props) {
  return (
    <div id="Main" className="container-fluid">
      <div id="Title" className="bg-dark">
        <h3 className="text-lead text-white">{props.name}</h3>
      </div>
    </div>
  )
}


