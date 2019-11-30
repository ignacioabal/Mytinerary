import React, { Component } from "react";
import Carousel from "./ActivitiesCarousel";

export default class Details extends Component {
  render() {
    return (
      <div className="row">
        <div className="collapse" id="moreInfo">
          <Carousel></Carousel>
        </div>
        <div id="btnDet">
          <h4>
            <a
              href="#moreInfo"
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
