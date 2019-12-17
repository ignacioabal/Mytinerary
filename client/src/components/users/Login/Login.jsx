import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../miniHeader/MiniHeader";
import Form from "./loginForm";
import Google from "./googleLogin";

class Login extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <h3>Log In</h3>
        <Form></Form>
        <Google></Google>
        <h6 className="mt-4">
          <Link to="/register">I don't have an account</Link>
        </h6>
      </>
    );
  }
}

export default Login;
