import React, {Component} from 'react';
import cn from 'classnames';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            primary: false,
        }
    }

    onIncrement = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1,
        })
    }

    onChangeClass = () => {
        const {primary} = this.state;
        this.setState({
            primary: !primary,
        })
    }

    render() {
        const { count } = this.state;
        const buttonClass = cn({
            btn: true,
            'btn-primary': this.state.primary,
        })
        return (
            <div className="row col-12">
                <button
                    className="btn btn-primary"
                    onClick={this.onIncrement}
                >
                    count: {count}
                </button>
                <button
                    className={buttonClass}
                    onClick={this.onChangeClass}
                >
                    button
                </button>
            </div>
        );
    }
}

export default Buttons;