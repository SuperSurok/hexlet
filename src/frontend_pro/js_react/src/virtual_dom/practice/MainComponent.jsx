import React from "react";
import ModalScholar from "./VirtualDomScholar";
import ModalMaster from "./VirtualDomMaster";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h4 className="title ml-3">Scholar Solution</h4>
                    <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open
                    </button>
                    <ModalScholar isOpen={modal}>
                        <ModalScholar.Header toggle={this.toggle}>Modal sadfasdfa title</ModalScholar.Header>
                        <ModalScholar.Body>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ModalScholar.Body>
                        <ModalScholar.Footer>
                            <button type="button" className="modal-close-button btn btn-default"
                                    onClick={this.toggle}>Cancel
                            </button>
                        </ModalScholar.Footer>
                    </ModalScholar>
                </div>
                <div className="col-6 d-flex justify-content-center flex-column">
                    <h4 className="title ml-3">Master Solution</h4>
                    <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open
                    </button>
                    <ModalMaster isOpen={modal}>
                        <ModalMaster.Header toggle={this.toggle}>Master Modal title</ModalMaster.Header>
                        <ModalMaster.Body>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </ModalMaster.Body>
                        <ModalMaster.Footer>
                            <button type="button" className="modal-close-button btn btn-default"
                                    onClick={this.toggle}>Cancel
                            </button>
                        </ModalMaster.Footer>
                    </ModalMaster>
                </div>
            </div>
        </div>
    );
  }
}

export default MainComponent;