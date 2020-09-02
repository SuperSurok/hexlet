import React, {Component} from 'react';
import ProgressScholar from './ProgressScholar'
import ProgressMaster from './ProgressMaster'

class Progress extends Component {
    render() {
        const percentage = 40;
        return (
            <div className="container border rounded mt-3">
                <div className="row justify-content-center">
                    <h3 className="mt-3">Progressbar Lesson</h3>
                </div>
                <ProgressScholar
                    percentage={percentage}
                />
                <ProgressMaster
                    percentage={percentage}
                />
            </div>
        );
    }
}

export default Progress;