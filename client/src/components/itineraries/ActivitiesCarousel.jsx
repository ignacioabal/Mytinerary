import React, { useState, Component } from "react";
import ItemsCarousel from "react-items-carousel";
import "./Carousel.css";

export default function Carousel() {
  // getActivities() {
  //   let acts = this.props.acts;

  //   acts.map(acts => {
  //     return <div className="carItem">{acts}</div>;
  //   });
  // }

  // render() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div id="actCar">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        rightChevron={<i className="fas fa-chevron-right"></i>}
        leftChevron={<i className="fas fa-chevron-left"></i>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        <div className="carItem">Activity 1</div>
        <div className="carItem">Activity 2</div>
        <div className="carItem">Activity 3</div>
      </ItemsCarousel>
    </div>
  );
  // }
}
