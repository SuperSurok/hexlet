import React, { Component } from "react";
import CarouselScholar from "./CarouselScholar";
import CarouselMaster from "./CarouselMaster";
import first from "./images/first.jpeg";
import second from "./images/second.jpeg";
import third from "./images/third.jpeg";

const images = [
  first,
  second,
  third,
];

class Carousel extends Component {
  render() {
    return (
      <div className="container border rounded mt-3 p-3">
        <div className="row justify-content-center">
          <h3 className="title">State Lesson</h3>
        </div>
        <CarouselScholar images={images} />
        <CarouselMaster images={images} />
      </div>
    );
  }
}

export default Carousel;
