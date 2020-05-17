import React, { Component } from "react";
import ImmutTheory from "./theory/ImmutTheory";
import ImmutPractice from "./practice/ImmutPractice";

class Immutability extends Component {
  render() {
    return (
      <div className="container border rounded mt-3 p-3">
        <h3 className="title ml-3">State Immutability Theory</h3>
        <ImmutTheory />
        <h3 className="title ml-3 mt-3">State Immutability Practice</h3>
        <ImmutPractice />
      </div>
    );
  }
}

export default Immutability;
