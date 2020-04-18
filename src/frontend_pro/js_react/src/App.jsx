import React from 'react';
import Card from './practice/components/Card';
import Jsx from './practice/jsx/Jsx';
class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Card />
                <Jsx />
            </div>
        );
    }
}

export default App;