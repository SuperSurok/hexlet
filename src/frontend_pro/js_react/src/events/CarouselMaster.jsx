import React, { Component } from "react";
import cn from "classnames";
import _ from "lodash";
class CarouselMaster extends Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.state = {
      currentIdx: 0,
      images: images.map((url) => {
        const key = `${url}_${_.uniqueId()}`;
        return { url, key };
      }),
    };
  }

  setNext = (e) => {
    e.preventDefault();
    const { currentIdx, images } = this.state;
    const nextIdx = (currentIdx + 1) % images.length;
    this.setState({ currentIdx: nextIdx });
  };

  setPrev = (e) => {
    e.preventDefault();
    const { currentIdx, images } = this.state;
    const prevIdx = (currentIdx + (images.length - 1)) % images.length;
    this.setState({ currentIdx: prevIdx });
  };

  renderItems() {
    const { currentIdx, images } = this.state;
    return images.map(({ url, key }, id) => {
      const classes = cn({
        "carousel-item": true,
        active: currentIdx === id,
      });
      return (
        <div key={key} className={classes}>
          <img src={`/static/media${url}`} className="d-block w-100" alt="" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h4 className="title">Master Solution</h4>
        </div>
        <div className="col-12">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">{this.renderItems()}</div>
            <a
              href="#carousel"
              className="carousel-control-prev"
              onClick={this.setPrev}
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              href="#carousel"
              className="carousel-control-next"
              onClick={this.setNext}
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselMaster;
