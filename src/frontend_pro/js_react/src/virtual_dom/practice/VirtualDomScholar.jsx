import React, {Component} from "react";
import cn from 'classnames';

const Header = ({ toggle, children }) => {
  const close = cn({
    close: toggle,
  });

  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button type="button" className={close} data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

const Body = ({ children }) => <p className="modal-body">{children}</p>;

const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

class ModalScholar extends Component {
  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { children, isOpen } = this.props;

    const modal = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    return (
      <div className={modal} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalScholar;