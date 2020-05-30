import React, { Component } from "react";

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className="row">
        <h4 className="title ml-3 mt-3">Text Area</h4>
        <div className="col-12">
            <textarea cols="30" rows="2" onChange={this.onChange} value={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default TextArea;
