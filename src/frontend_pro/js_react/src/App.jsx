import React from 'react';
import Card from './practice/components/Card';
import Jsx from './practice/jsx/Jsx';
import PropsLesson from "./practice/props/Props";
class App extends React.Component {
    render() {
        const titlePropsLesson = 'Title Props Lesson';
        const textPropsLesson = 'Text Prop Lesson'
        return (
            <div className='container'>
                <Card />
                <Jsx />
                <PropsLesson titlePropsLesson={textPropsLesson} textPropsLesson={textPropsLesson}/>
            </div>
        );
    }
}

export default App;