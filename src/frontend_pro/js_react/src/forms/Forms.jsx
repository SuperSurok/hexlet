import React, { Component } from "react";
import FormTheory from "./theory/FormTheory";
import TextArea from "./theory/TextArea";
import DropDownList from "./theory/DropDownList";
import MyFormScholar from "./practice/MyFormScholar";

class Forms extends Component {
  render() {
    const text = "Initial text";
    return (
      <div className="container border rounded mt-3 p-3">
        <h3 className="title row justify-content-center">Form Lesson</h3>
        {/*<h4 className="title">Form Theory</h4>*/}
        {/*<FormTheory text={text} />*/}
        {/*<TextArea text={text} />*/}
        {/*<DropDownList />*/}
        <h4 className="title mt-3">Form Practice</h4>
        <MyFormScholar />
      </div>
    );
  }
}

export default Forms;
