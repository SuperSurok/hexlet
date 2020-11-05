import React from "react";

export default class MasterItem extends React.Component {
    render() {
        const {task, onRemove} = this.props;

        return (
            <div className="row">
                <div>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={onRemove}
                    >
                        -
                    </button>
                </div>
                <div className="col-10">{task.text}</div>
            </div>
        );
    }
}
