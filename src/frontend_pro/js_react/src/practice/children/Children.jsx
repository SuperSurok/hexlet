import React, {Component} from 'react';
import ChildrenScholar from "./ChildrenScholar";
import ChildrenMaster from "./ChildrenMaster";

class Children extends Component {
    render() {
        const {scholarSolutionTitle, masterSolutionTitle} = this.props;
        const domScholar = (
            <ChildrenScholar
                scholarSolutionTitle={scholarSolutionTitle}
            >
                <p>Scholar One</p>
                <p>Scholar Two</p>
            </ChildrenScholar>
        )
        const domMaster = (
            <ChildrenMaster
                masterSolutionTitle={masterSolutionTitle}
            >
                <p>Master One</p>
                <p>Master Two</p>
            </ChildrenMaster>
        )
        return (
            <div className="container border rounded mt-3 p-3">
                <div className="row justify-content-center">
                    <h3 className="title">State Lesson</h3>
                </div>
                {domScholar}
                {domMaster}
            </div>
        );
    }
}

export default Children;