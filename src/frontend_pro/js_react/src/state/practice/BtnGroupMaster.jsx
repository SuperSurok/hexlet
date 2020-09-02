import React, { Component } from "react";
import cn from "classnames";

class BtnGroupMaster extends Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  selectLeft = () => this.setActive("left");

  selectRight = () => this.setActive("right");

  setActive = (active) => {
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      "btn-secondary": true,
    };

    const leftButtonClass = {
      ...sharedClasses,
      left: true,
      active: active === "left",
    };

    const rightButtonClass = {
      ...sharedClasses,
      right: true,
      active: active === "right",
    };

    return (
      <div className="row mt-3">
        <div className="col-12">
          <h4 className="title">Master Solution</h4>
        </div>
        <div className="col-12">
          <div className="btn-group" role="group">
            <button
              type="button"
              onClick={this.selectLeft}
              className={cn(leftButtonClass)}
            >
              Left
            </button>
            <button
              type="button"
              onClick={this.selectRight}
              className={cn(rightButtonClass)}
            >
              Right
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BtnGroupMaster;
