import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="form-group">
        <label htmlFor="username" className="text-muted">
          Username:
        </label>
        <input type="text" id="username" className="form-control" />
        <label htmlFor="password" className="text-muted mt-1">
          Password:
        </label>
        <input type="password" id="password" className="form-control" />
        <div className="text-left m-2">
          <input type="checkbox" name="" id="remember" />
          <label htmlFor="remember" className="text-muted text-left">
            Remember me?
          </label>
        </div>
        <input type="submit" value="Ok!" className="btn btn-secondary w-25 " />
      </form>
    );
  }
}
