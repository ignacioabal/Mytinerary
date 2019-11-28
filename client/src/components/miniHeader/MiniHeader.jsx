import React, { Component } from "react";
import Avatar from "../users/Avatar";
import NavButton from "../header/NavButton";
import "./header.css";

export default class MiniHeader extends Component {
  render() {
    return (
      <div id="miniHeader">
        <Avatar
          img={require("../../img/defaultAvatar.png")}
          divClass="defAvatar dropdown"
        ></Avatar>
        <img
          src={require("../../img/MYtineraryLogo.png")}
          alt="Mytinerary Logo"
          className="img"
          id="miniLogo"
        />
        <NavButton></NavButton>
      </div>
    );
  }
}
