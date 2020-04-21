import React from 'react';
import Card from './practice/components/Card';
import Jsx from './practice/jsx/Jsx';
import PropsLesson from "./practice/props/Props";
import Collections from "./practice/collections/Collections";
import Progress from "./practice/differences_jsx_html/Progress";
import ClassNames from "./practice/classnames/ClassNames";

class App extends React.Component {
    render() {
        const titlePropsLesson = 'Title Props Lesson';
        const textPropsLesson = 'Text Prop Lesson'
        const scholarSolutionTitle = <h4 className="card-title">Scholar Solution</h4>
        const masterSolutionTitle = <h4 className="card-title">Master Solution</h4>
        return (
            <div className='container'>
                <Card />
                <Jsx />
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
            </div>
        );
    }
}

export default App;