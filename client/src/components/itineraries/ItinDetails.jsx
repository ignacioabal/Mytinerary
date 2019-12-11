import React, { Component } from "react";
import Carousel from "./ActivitiesCarousel";

export default class Details extends Component {
  render() {
    return (
      <div className="row">
        <div className="collapse" id={this.props.id}>
          <Carousel acts={this.props.acts}></Carousel>
        </div>
        <div id="btnDet">
          <h4>
            <a
              href={"#" + this.props.id}
              className="btn  btn-block bg-dark text-white"
              role="button"
              data-toggle="collapse"
            >
              See More
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
