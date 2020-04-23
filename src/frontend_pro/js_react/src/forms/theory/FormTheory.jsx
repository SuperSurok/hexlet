import React, { Component } from "react";

class FormTheory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    alert(`A name was submitted: ${text}`);
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="row">
        <h4 className="title ml-3">Form</h4>
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={text} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default FormTheory;
