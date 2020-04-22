import React, {Component} from 'react';

class GetCardProps extends Component {
    render() {
        const {titlePropsLesson, textPropsLesson, scholarSolutionTitle} = this.props;
        return (
            <div className='card'>
                <div className="card-header">{scholarSolutionTitle}</div>
                <div className="card-body">
                    <h3 className="card-title">{titlePropsLesson}</h3>
                    <p className="card-text">{textPropsLesson}</p>
                </div>
            </div>
        );
    }
}

class GetCardPropsMaster extends Component {
    render() {
        const {titlePropsLesson, textPropsLesson, masterSolutionTitle} = this.props;
        return (
            <div>
                <div className='card'>
                    <div className="card-header">{masterSolutionTitle}</div>
                    <div className="card-body">
                        <h3 className="card-title">{titlePropsLesson}</h3>
                        <p className="card-text">{textPropsLesson}</p>
                    </div>
                </div>
            </div>
        );
    }
}

class PropsLesson extends Component {
    render() {
        const {titlePropsLesson, textPropsLesson, scholarSolutionTitle, masterSolutionTitle} = this.props;
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h3 className="mt-3">Props Lesson</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                        <GetCardProps
                        scholarSolutionTitle={scholarSolutionTitle}
                        titlePropsLesson={titlePropsLesson}
                        textPropsLesson={textPropsLesson}/>
                    </div>
                    <div className="col-6">
                        <GetCardPropsMaster
                        masterSolutionTitle={masterSolutionTitle}
                        titlePropsLesson={titlePropsLesson}
                        textPropsLesson={textPropsLesson}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PropsLesson;