import React, { Component } from "react";
import "./style.css";

export default class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: require("../../../../img/defaultAvatar.png")
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  }

  render() {
    return (
      <>
        <div>
          <label for="imgUpload">
            <div
              className="border rounded-circle"
              id="userImg"
              style={{ backgroundImage: `url("${this.state.file}")` }}
            ></div>
            <label className="text-muted" for="imgUpload">
              Click to change
            </label>
          </label>

          <input
            className="form-control"
            type="file"
            id="imgUpload"
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
