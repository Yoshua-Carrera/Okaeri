import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "@brainhubeu/react-carousel/lib/style.css";
import image1 from "../images/pexels-photo-3945673.jpeg";
import image2 from "../images/pexels-photo-3593983.jpeg";
import image3 from "../images/pexels-photo-3945673.jpeg";

import Carousel, { arrowsPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";

class CreateCarousel extends Component<{}, { value: number; slides: any }> {
  state = {
    value: 0,
    slides: [<img src={image1} />, <img src={image2} />, <img src={image3} />],
  };

  onchange = (value: any) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button>
                    <Icon size="5x" name="angle-double-left" />
                  </button>
                ),
                arrowLeftDisabled: (
                  <button>
                    <Icon size="5x" name="angle-left" />
                  </button>
                ),
                arrowRight: (
                  <button>
                    <Icon size="5x" name="angle-double-right" />
                  </button>
                ),
                arrowRightDisabled: (
                  <button>
                    <Icon size="5x" name="angle-right" />
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
            "infinite",
          ]}
        >
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
        </Carousel>
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    );
  }
}

export default CreateCarousel;
