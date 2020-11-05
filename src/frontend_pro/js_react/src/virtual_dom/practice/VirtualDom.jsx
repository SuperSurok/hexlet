import React from "react";

import MainComponent from './MainComponent';

const VirtualDom = () => (
    <div className="container border rounded mt-3 p-3">
        <div className="row justify-content-center">
            <h3 className="mt-3">Virtual Dom Lesson</h3>
        </div>
        <MainComponent/>
    </div>
);

export default VirtualDom;