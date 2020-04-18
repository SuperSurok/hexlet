import React, {Component} from 'react';

const GetCard = ({title = 'Some Title', text = 'Some Text'}) => {
    const scholarSolutionTitle = <h4 className="card-title">Scholar Solution</h4>
    if (title || text) {
        return (
            <div className="card">
                <div className="card-header">{scholarSolutionTitle}</div>
                <div className="card-body">
                    {title && <h4 className="card-title">{title}</h4>}
                    {text && <p className="card-text">{text}</p>}
                </div>
            </div>
        )
    }
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
const MasterCard = ({title = 'Master Title', text = 'Master Text'}) => {
    if (!title && !text) {
        return null;
    }

    const titleDom = title && <h4 className="card-title">{title}</h4>;
    const textDom = text && <p className="card-text">{text}</p>;
    const masterSolutionTitle = <h4 className="card-title">Master Solution</h4>

    return (
        <div className="card">
            <div className="card-header">{masterSolutionTitle}</div>
            <div className="card-body">
                {titleDom}
                {textDom}
            </div>
        </div>
    );
};

class Jsx extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className="mt-3">JSX Lesson</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                        <GetCard/>
                    </div>
                    <div className="col-6">
                        <MasterCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jsx;