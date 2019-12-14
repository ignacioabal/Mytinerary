import React, { Component, Fragment } from "react";
import Header from "../../miniHeader/MiniHeader";
import Form from "./RegisterForm/RegisterForm";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Form></Form>
      </Fragment>
    );
  }
}

export default Register;
