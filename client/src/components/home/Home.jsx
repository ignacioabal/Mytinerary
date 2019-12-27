import React from "react";
import ImgButton from "../util/ImgButton";
import Carousel from "../util/Carousel";
import Header from "../header/Header";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main>
          <p>
            Find your perfect trip, designed bt insiders who know and love their
            cities.
          </p>
          <h2>Start browsing</h2>
          <ImgButton
            href="/cities"
            img={require("../../img/right_arrow.png")}
            className="GoArrow"
          ></ImgButton>
          <p>Popular MYtineraries</p>

          <Carousel> </Carousel>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
