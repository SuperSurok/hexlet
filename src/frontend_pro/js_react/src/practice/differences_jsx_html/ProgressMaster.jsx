import React, {Component} from 'react';

class ProgressMaster extends Component {
    render() {
        const { percentage } = this.props;
        return (
            <div className="row">
                <div className="col-3">
                    <h4 className="title">Master Solution</h4>
                </div>
                <div className="col-9 pt-2">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{width: `${percentage}%`}}
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-label="progressbar"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressMaster;