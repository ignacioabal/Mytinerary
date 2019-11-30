import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./Carousel.css";

export default () => {
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
        <div id="carItem">First Activity</div>
        <div id="carItem">Second Activity</div>
        <div id="carItem">Third Activity</div>
        <div id="carItem">Fourth Activity</div>
      </ItemsCarousel>
    </div>
  );
};
