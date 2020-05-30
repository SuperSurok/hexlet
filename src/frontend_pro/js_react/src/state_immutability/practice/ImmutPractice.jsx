import React, { Component } from "react";
import _ from 'lodash'

class ImmutPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      buttons: [],
    };
  }

  handleInc = (arr) => (e) => {
    e.preventDefault();
    const { count } = this.state;
    this.setState(prevState=> ({
      count: count + 1,
      buttons: [arr, ...prevState.buttons],
    }));
  };

  handleDec = (arr) => (e) => {
    e.preventDefault();
    const { count } = this.state;
    this.renderButton(arr);
    this.setState((prevState) => ({
      count: count - 1,
      buttons: [arr, ...prevState.buttons],
    }));
  };

  renderButton = (arr) => {
    console.log(arr);
  };

  render() {
    const { count, buttons } = this.state;
    const renderButton = <button key={_.uniqueId()} type="button" className="list-group-item list-group-item-action">
        {count}
      </button>;
    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn hexlet-inc"
          onClick={this.handleInc(renderButton)}
        >
          +
        </button>
        <button
          type="button"
          className="btn hexlet-dec"
          onClick={this.handleDec(renderButton)}
        >
          -
        </button>
        <div className="list-group">{buttons}</div>
      </div>
    );
  }
}

export default ImmutPractice;
