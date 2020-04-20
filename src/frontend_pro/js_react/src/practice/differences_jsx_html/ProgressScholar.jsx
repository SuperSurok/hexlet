import React, {Component} from "react";

class ProgressScholar extends Component {
    render() {
        const {percentage, scholarSolutionTitle} = this.props;
        const progressBarStyle = {
            width: `${percentage}%`,
        };
        return (
            <div className="row">
                <div className="col-3">
                    <h4 className="title">Scholar Solution</h4>
                </div>
                <div className="col-9 pt-2">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-label="progressbar"
                            style={progressBarStyle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressScholar;