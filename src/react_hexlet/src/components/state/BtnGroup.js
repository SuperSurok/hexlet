import React, {Component} from 'react';
import cn from "classnames";

////////////////////////////////////////
///// Solution /////////////////////////
////////////////////////////////////////
export class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeft: false,
            activeRight: false,
        }
    }

    onClickL = () => {
        this.setState({
            activeLeft: true,
            activeRight: false,
        })
    };

    onClickR = () => {
        this.setState({
            activeLeft: false,
            activeRight: true,
        })
    };

    render() {

        const {activeLeft, activeRight} = this.state;
        const commonClass = {
            btn: true,
            'btn-secondary': true,
        };

        const leftActive = cn({
            ...commonClass,
            left: true,
            active: activeLeft,
        });

        const rightActive = cn({
            ...commonClass,
            right: true,
            active: activeRight,
        });

        return (
            <React.Fragment>
                <h2>Solution</h2>
                <div className="btn-group">
                    <button
                        type="button"
                        className={`${leftActive}`}
                        onClick={this.onClickL}
                    >
                        Left
                    </button>
                    <button
                        type="button"
                        className={`${rightActive}`}
                        onClick={this.onClickR}
                    >
                        Right
                    </button>
                </div>
            </React.Fragment>
        );
    }
}


////////////////////////////////////////
///// Master Solution //////////////////
////////////////////////////////////////

export class BtnGroupMaster extends Component {
    state = {active: null};

    selectLeft = () => this.setActive('left');

    selectRight = () => this.setActive('right');

    setActive = (active) => {
        this.setState({ active })
    };

    render() {
        const {active} = this.state;

        const sharedClasses = {
            btn: true,
            'btn-secondary': true,
        };

        const leftButtonClass = {
            ...sharedClasses,
            left: true,
            active: active === 'left',
        };

        const rightButtonClass = {
            ...sharedClasses,
            right: true,
            active: active === 'right',
        };

        return (
            <React.Fragment>
                <h2>Master Solution</h2>
                <div className="btn-group">
                    <button type="button" onClick={this.selectLeft} className={cn(leftButtonClass)}>Left</button>
                    <button type="button" onClick={this.selectRight} className={cn(rightButtonClass)}>Right</button>
                </div>
            </React.Fragment>
        )
    }
}

class State extends Component{
    render() {
        return(
            <React.Fragment>
                <h2>State Lesson</h2>
                <BtnGroup/>
                <BtnGroupMaster/>
            </React.Fragment>
        )
    }
}

export default State;