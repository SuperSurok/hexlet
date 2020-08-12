import React, {Component} from 'react';
import cn from 'classnames';

const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);
const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class ModalMaster extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;

    const classes = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    const style = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <div className={classes} style={style}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}