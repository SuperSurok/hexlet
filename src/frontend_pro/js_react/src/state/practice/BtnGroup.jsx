import React, { Component } from "react";
import BtnGroupScholar from "./BtnGroupScholar";
import BtnGroupMaster from "./BtnGroupMaster";

class BtnGroup extends Component {
  render() {
    return (
      <>
        <BtnGroupScholar />
        <BtnGroupMaster />
      </>
    );
  }
}

export default BtnGroup;
