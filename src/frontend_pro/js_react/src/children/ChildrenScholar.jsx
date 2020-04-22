import React, {Component} from 'react';

class ChildrenScholar extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="row">
                <h3 className="title ml-3">Scholar Solution</h3>
                <div className="col-12">
                    <ul className="list-group">
                        {React.Children.map(children, (child) => (
                            <li className="list-group-item">{child}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChildrenScholar;