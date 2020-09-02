import React, { Component } from "react";
import cn from "classnames";

class CollapseMaster extends Component {
  static defaultProps = {
    opened: true,
  };

  constructor(props) {
    super(props);
    const { opened } = this.props;
    this.state = {
      opened,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  render() {
      const {opened} = this.state;
      const {text} = this.props;
      const classes = cn({
          collapse: true,
          show: opened,
      })
    return (
      <div className="row">
        <h4 className="title ml-3">Master Solution</h4>
        <div className="col-12">
          <p>
            <a className="btn btn-primary" href="#" onClick={this.handleToggle}>
              Link with href
            </a>
          </p>
          <div className={classes}>
            <div className="card card-body">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollapseMaster;
