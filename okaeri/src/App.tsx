import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "@brainhubeu/react-carousel/lib/style.css";
import image1 from "./images/pexels-photo-3945673.jpeg";
import image2 from "./images/pexels-photo-3593983.jpeg";
import image3 from "./images/pexels-photo-3945673.jpeg";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <code>お帰り</code>
        </header>
      </div>
    );
  }
}

export default App;
