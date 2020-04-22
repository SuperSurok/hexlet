import React, {Component} from 'react';
import Counter from "./Counter";

class TwoCounters extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <Counter count={5}/>
            </div>
        );
    }
}

export default TwoCounters;