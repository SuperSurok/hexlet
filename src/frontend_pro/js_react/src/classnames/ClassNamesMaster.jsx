import React, { Component } from "react";
import cn from "classnames";

class ClassNamesMaster extends Component {
  render() {
    const { text, type, masterSolutionTitle } = this.props;
    const data = cn({
      alert: true,
      [`alert-${type}`]: true,
    });
    return (
      <div className="row">
        <div className="ml-3">{masterSolutionTitle}</div>
        <div className="col-12">
          <div className={data} role="alert">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassNamesMaster;
