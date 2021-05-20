import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import CreateCarousel from "./components/carousel/carousel";
import CarouselV2 from "./components/carousel V2/carousel";

ReactDOM.render(
  <React.StrictMode>
    <CreateCarousel />
    <App />
    {/* <CarouselV2 /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
