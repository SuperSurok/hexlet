import React, { Component } from "react";

class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    alert(`Your favorite flavor is: ${value}`);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="row">
        <h4 className="title ml-3 mt-3">Drop Down List</h4>
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite La Croix flavor:
              <select value={value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default DropDownList;
