import React from 'react';
import Card from './components/Card';
import Jsx from './jsx/Jsx';
import PropsLesson from "./props/Props";
import Collections from "./collections/Collections";
import Progress from "./differences_jsx_html/Progress";
import ClassNames from "./classnames/ClassNames";
import Children from "./children/Children";
import IndexState from "./state/index";
import Carousel from "./events/Carousel";

class App extends React.Component {
    render() {
        const titlePropsLesson = 'Title Props Lesson';
        const textPropsLesson = 'Text Prop Lesson'
        const scholarSolutionTitle = <h4 className="card-title">Scholar Solution</h4>
        const masterSolutionTitle = <h4 className="card-title">Master Solution</h4>
        return (
            <div className='container'>
                <div className="row col-12 p-4 justify-content-center">
                    <h3 className="title">JS React Course</h3>
                </div>
                <Card/>
                <Jsx/>
                <PropsLesson
                    scholarSolutionTitle={scholarSolutionTitle}
                    masterSolutionTitle={masterSolutionTitle}
                    titlePropsLesson={titlePropsLesson}
                    textPropsLesson={textPropsLesson}
                />
                <Collections
                    scholarSolutionTitle={scholarSolutionTitle}
                    masterSolutionTitle={masterSolutionTitle}
                />
                <Progress
                    scholarSolutionTitle={scholarSolutionTitle}
                    masterSolutionTitle={masterSolutionTitle}
                />
                <ClassNames
                    scholarSolutionTitle={scholarSolutionTitle}
                    masterSolutionTitle={masterSolutionTitle}
                />
                <Children />
                <IndexState />
                <Carousel />
            </div>
        );
    }
}

export default App;