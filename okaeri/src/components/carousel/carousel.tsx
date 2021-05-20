import React, { Component } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import carouselData from "./carouselImageData";

import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

class CreateCarousel extends Component<{}, {}> {
  state = {
    value: 0,
    slides: carouselData.map((slide, index) => {
      return slide.image;
    }),
    imageData: carouselData,
  };

  length = carouselData.length;

  render() {
    return (
      <div>
        <section className="carousel">
          <Carousel
            plugins={[
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <FaArrowCircleLeft className="leftArrow" />,
                  arrowRight: <FaArrowCircleRight className="rightArrow" />,
                  addArrowClickHandler: true,
                },
              },
              "infinite",
            ]}
          >
            {carouselData.map((slide, index) => {
              return (
                <img
                  className="image"
                  key={index}
                  src={slide.image}
                  alt="mangaPreview"
                />
              );
            })}
          </Carousel>
        </section>
      </div>
    );
  }
}

export default CreateCarousel;
//test
