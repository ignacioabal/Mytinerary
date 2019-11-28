import React, { Component } from "react";

export default class filterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFilter: ""
    };
  }

  handleChange = e => {
    this.setState({
      cityFilter: e.target.value
    });

    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="form-group">
        {/* <label htmlFor="filter">Search:</label> */}
        <input
          type="text"
          className="form-control"
          id="filter"
          value={this.state.cityFilter}
          onChange={this.handleChange}
          placeholder="Search for Cities"
        />
      </div>
    );
  }
}
