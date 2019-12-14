import React, { Component } from "react";
import Image from "./UserImage";

export default class RegisterForm extends Component {
  render() {
    return (
      <>
        <form className="form-group">
          <h3 className="text-lead">Create New Account</h3>
          {/* <h6 className="text-muted">Create Your own Itineraries</h6> */}
          <Image></Image>
          Username: <input className="form-control" type="text" id="username" />
          Password:{" "}
          <input className="form-control" type="password" id="password" />
          E-mail: <input className="form-control" type="email" id="mail" />
          First Name:{" "}
          <input className="form-control" type="text" id="firstName" />
          Last Name:{" "}
          <input className="form-control" type="text" id="lastName" />
          Country:{" "}
          <select className="form-control" name="" id="">
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Holland">Holland</option>
            <option value="Ireland">Ireland</option>
            <option value="Spain">Spain</option>
            <option value="United States">United States</option>
          </select>
          <input type="checkbox" id="tnc" />
          <label htmlFor="tnc">
            I agree MYtinerary's <a href="#">Terms & Conditions</a>.
          </label>
          <br />
          <input type="submit" value="Ok!" />
        </form>
      </>
    );
  }
}
