import React, {Component} from 'react';

import ClassNamesScholar from "./ClassNamesSholar";
import ClassNamesMaster from "./ClassNamesMaster";


class ClassNames extends Component {
    render() {
        const { scholarSolutionTitle, masterSolutionTitle } = this.props;
        const type = "warning";
        const text = "what is love?"
        return (
            <div className="container border rounded mt-3">
                <div className="row justify-content-center">
                    <h3 className="mt-3">JSX Lesson</h3>
                </div>
                <ClassNamesScholar
                    type={type}
                    text={text}
                    scholarSolutionTitle={scholarSolutionTitle}
                />
                <ClassNamesMaster
                    type={type}
                    text={text}
                    masterSolutionTitle={masterSolutionTitle}
                />
            </div>
        );
    }
}

export default ClassNames;