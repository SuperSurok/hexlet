import React, { Component } from "react";
import CollapseScholar from "./CollapseScholar";
import CollapseMaster from "./CollapseMaster";

class AProgramming extends Component {
  render() {
    const text = "Collapse Me";
    return (
      <div className="container border rounded mt-3 p-3">
        <h3 className="title">Automatic Programming</h3>
        <CollapseScholar text={text} />
        <CollapseMaster text={text} />
      </div>
    );
  }
}

export default AProgramming;
