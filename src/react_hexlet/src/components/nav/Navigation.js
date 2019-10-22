import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
    return (
        <div>
            <Link to="/counter">Counter</Link>
        </div>
    );
}

export default Navigation;