import React, {Component} from 'react';

class Counter extends Component {

    static defaultProps = {
        count: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }

    onClick = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1,
        })
    }

    render() {
        const { count } = this.state
        return (
            <button
                type="button"
                className="btn btn-primary"
                onClick={this.onClick}>
                count: {count}
            </button>
        );
    }
}

export default Counter;