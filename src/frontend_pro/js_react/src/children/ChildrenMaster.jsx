import React, {Component} from 'react';

class ChildrenMaster extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="row">
                <h3 className="title mt-3 ml-3">Master Solution</h3>
                <div className="col-12">
                    <ul className="list-group">
                        {React.Children.map(children, (child) => <li className="list-group-item">{child}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChildrenMaster;