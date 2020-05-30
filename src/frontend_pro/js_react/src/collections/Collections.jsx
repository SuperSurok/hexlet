import React from 'react';
import {uniqueId} from 'lodash';

class Definitions extends React.Component {
    render() {
        const {data, scholarSolutionTitle} = this.props;
        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-header">{scholarSolutionTitle}</div>
                    <div className="card-body">
                        {data.length > 0 && (<dl>
                            {data.map((item) => (
                                <React.Fragment key={`rf-${uniqueId()}`}>
                                    <dt key={`dt-${uniqueId()}`}>{item.dt}</dt>
                                    <dd key={`dd-${uniqueId()}`}>{item.dd}</dd>
                                </React.Fragment>
                            ))}
                        </dl>)}
                    </div>
                </div>
            </div>
        );
    }
}

class DefinitionsMaster extends React.Component {
    render() {
        const {data, masterSolutionTitle} = this.props;
        if (data.length === 0) {
            return null;
        }
        const tags = data.map(({dt, dd}) => (
            <React.Fragment key={uniqueId()}>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
            </React.Fragment>
        ));

        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-header">{masterSolutionTitle}</div>
                    <div className="card-body">
                        <dl>{tags}</dl>
                    </div>
                </div>
            </div>
        );
    }
}

class Collections extends React.Component {
    render() {
        const definitions = [
            {dt: 'React', dd: 'A JavaScript library for building user interfaces'},
            {dt: 'MDN', dd: 'Resources for developers from developers'},
        ];
        const {scholarSolutionTitle, masterSolutionTitle} = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className="mt-3">Collections Lesson</h3>
                </div>
                <div className="row">
                    <Definitions
                        data={definitions}
                        scholarSolutionTitle={scholarSolutionTitle}
                    />
                    <DefinitionsMaster
                        data={definitions}
                        masterSolutionTitle={masterSolutionTitle}
                    />
                </div>
            </div>
        );
    }
}

export default Collections;