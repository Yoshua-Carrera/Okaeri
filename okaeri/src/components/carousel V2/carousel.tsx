import React, { Component } from "react";
import carouselData from "./carouselImageData";

class CarouselV2 extends Component {
  return() {
    <div>
      {carouselData.map((slide, index) => {
        return <img src={slide.image} alt="MangaSample" />;
      })}
    </div>;
  }
}

export default CarouselV2;
