import React, {Component} from "react";
import cn from 'classnames'

class ClassNamesScholar extends Component {
    render() {
        const { text, type, scholarSolutionTitle } = this.props;
        const data = cn({
            alert: true,
            [`alert-${type}`]: true,
        })
        return(
            <div className="row">
                <div className="ml-3">{scholarSolutionTitle}</div>
                <div className="col-12">
                    <div className={data} role="alert">{text}</div>
                </div>
            </div>
        );
    }
}

export default ClassNamesScholar;