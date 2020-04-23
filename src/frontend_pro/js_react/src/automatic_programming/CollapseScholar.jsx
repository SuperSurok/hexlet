import React, { Component } from "react";
import cn from "classnames";

class CollapseScholar extends Component {
  static defaultProps = {
    opened: true,
  };

  constructor(props) {
    super(props);
    const { opened } = this.props;
    this.state = {
      active: opened,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
      const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  render() {
    const { active } = this.state;
    const { text } = this.props;
    const styleCollapse = cn({
      collapse: true,
      show: active,
    });

    return (
      <div className="row">
        <h4 className="title ml-3">Scholar Solution</h4>
        <div className="col-12">
          <p>
            <a className="btn btn-primary" href="#" onClick={this.handleToggle}>
              Link with href
            </a>
          </p>
          <div className={styleCollapse}>
            <div className="card card-body">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollapseScholar;
