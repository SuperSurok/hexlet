import React, { Component } from "react";
import ImmutTheory from "./theory/ImmutTheory";

class Immutability extends Component {
  render() {
    return (
      <div className="container border rounded mt-3 p-3">
        <ImmutTheory />
      </div>
    );
  }
}

export default Immutability;
