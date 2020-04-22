import React, { Component } from "react";
import CarouselScholar from "./CarouselScholar";
import CarouselMaster from "./CarouselMaster";

const images = [
  "/images/first.jpeg",
  "/images/second.jpeg",
  "/images/third.jpeg",
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
