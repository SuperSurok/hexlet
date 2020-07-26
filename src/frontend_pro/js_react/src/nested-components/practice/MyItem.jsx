import React from "react";

class MyItem extends React.Component {
    render() {
        const {id, task, onRemove} = this.props;
        return (
            <div>
                <div className="row">
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={onRemove(id)}
                        >
                            -
                        </button>
                    </div>
                    <div className="col-10">{task}</div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default MyItem;
