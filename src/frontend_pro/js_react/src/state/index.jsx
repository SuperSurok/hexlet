import React, {Component} from "react";
import Buttons from "./theory/Buttons";
import TwoCounters from "./theory/TwoCounters";
import BtnGroup from "./practice/BtnGroup";


class IndexState extends Component {
    render() {
        return (
            <div className="container border rounded mt-3 p-3">
                <div className="row justify-content-center">
                    <h3 className="title">State Lesson</h3>
                </div>
                <div className="row">
                    <h3 className="title ml-3">Theory</h3>
                </div>
                <Buttons />
                <TwoCounters />
                <div className="row mt-3">
                    <h3 className="title ml-3">Practice</h3>
                </div>
                <BtnGroup />
            </div>
        );
    }
}

export default IndexState;