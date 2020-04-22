import React, { Component } from "react";
import cn from "classnames";

import first from "./images/first.jpeg";
import second from "./images/second.jpeg";
import third from "./images/third.jpeg";

class CarouselScholar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active: 0,
    };
  }

  goToSlide = (active) => {
    this.setState({ active });
  };

  goPrevSlide = (evt) => {
    evt.preventDefault();
    let index = this.state.activeIndex;
    let { images } = this.props;
    let slideLength = images.length;
    if (index < 1) {
      index = slideLength;
    }
    --index;
    this.setState({
      activeIndex: index,
    });
    this.goToSlide(index);
  };

  goToNextSlide = (evt) => {
    const { activeIndex } = this.state;
    evt.preventDefault();
    let index = activeIndex;
    let { images } = this.props;
    let slidesLength = images.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    this.setState({
      activeIndex: index,
    });
    this.goToSlide(index);
  };

  render() {
    const { active } = this.state;
    const itemClass = {
      "carousel-item": true,
    };

    const firstImageClass = {
      ...itemClass,
      active: active === 0,
    };

    const secondImageClass = {
      ...itemClass,
      active: active === 1,
    };

    const thirdImageClass = {
      ...itemClass,
      active: active === 2,
    };

    return (
      <div className="row">
        <div className="col-12">
          <h4 className="title">Scholar Solution</h4>
        </div>
        <div className="col-12">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className={cn(firstImageClass)}>
                <img src={first} alt="" className="d-block w-100"/>
              </div>
              <div className={cn(secondImageClass)}>
                <img src={second} alt="" className="d-block w-100"/>
              </div>
              <div className={cn(thirdImageClass)}>
                <img src={third} alt="" className="d-block w-100"/>
              </div>
            </div>
            <a
                href="#carousel"
                className="carousel-control-prev"
                role="button"
                data-slide="prev"
                onClick={this.goPrevSlide}
            >
              <span className="carousel-control-prev-icon"/>
              <span className="sr-only">Previous</span>
            </a>
            <a
                href="#carousel"
                className="carousel-control-next"
                role="button"
                data-slide="next"
                onClick={this.goToNextSlide}
            >
              <span className="carousel-control-next-icon"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselScholar;
