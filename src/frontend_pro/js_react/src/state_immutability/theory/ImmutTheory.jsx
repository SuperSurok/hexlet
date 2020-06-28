import React, { Component } from "react";

class ImmutTheory extends Component {
  constructor(props) {
    super(props);
    const items = [1, 2, 3, 4, 5].map((i) => ({ id: i }));
    this.state = {
      items,
    };
  }

  removeItem = (id) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter((item) => item.id !== id);
    this.setState({
      items: newItems,
    });
  };

  renderItem = ({ id }) => (
    <li key={id} onClick={this.removeItem(id)}>
      <a href="#">{id}</a>
    </li>
  );

  render() {
    const { items } = this.state;
    return (
      <div className="row">
        <h4 className="title ml-3">Delete Item Array</h4>
        <ul>{items.map((item) => this.renderItem(item))}</ul>
      </div>
    );
  }
}

export default ImmutTheory;
