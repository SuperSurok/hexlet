import React, { Component } from "react";
import cn from "classnames";

class BtnGroupScholar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLeft: false,
      activeRight: false,
    };
  }

  handleClickLeft = () => {
    this.setState({
      activeLeft: true,
      activeRight: false,
    });
  };

  handleClickRight = () => {
    this.setState({
      activeLeft: false,
      activeRight: true,
    });
  };

  render() {
    const { activeLeft, activeRight } = this.state;
    const btnStyleLeft = cn({
      btn: true,
      "btn-secondary": true,
      left: true,
      active: activeLeft,
    });

    const btnStyleRight = cn({
      btn: true,
      "btn-secondary": true,
      right: true,
      active: activeRight,
    });

    return (
      <div className="row">
        <div className="col-12">
          <h4 className="title">Master Solution</h4>
        </div>
          <div className="col-12">
              <div className="btn-group" role="group">
                  <button
                      type="button"
                      className={btnStyleLeft}
                      onClick={this.handleClickLeft}
                  >
                      Left
                  </button>
                  <button
                      type="button"
                      className={btnStyleRight}
                      onClick={this.handleClickRight}
                  >
                      Right
                  </button>
              </div>
          </div>
      </div>
    );
  }
}

export default BtnGroupScholar;
