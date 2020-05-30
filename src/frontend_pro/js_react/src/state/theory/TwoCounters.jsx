import React, {Component} from 'react';
import Counter from "./Counter";

class TwoCounters extends Component {
    render() {
        return (
            <div className="row col-12 mt-3">
                <Counter/>
                <Counter count={5}/>
            </div>
        );
    }
}

export default TwoCounters;