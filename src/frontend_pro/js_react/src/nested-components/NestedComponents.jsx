import React from "react";

import TheoryNestedComponents from "./theory/TheoryNestedComponents";
import MyNestedComponents from "./practice/MyNestedComponents.jsx";
import MasterNestedComponents from "./practice/MasterNestedComponents.jsx";

const NestedComponents = () => (
    <div className="container border rounded mt-3 p-3">
        <h3 className="title row justify-content-center">
            Nested Components Lesson
        </h3>
        <h4 className="title">Nested Components Theory</h4>
        <TheoryNestedComponents/>
        <h4 className="title row justify-content-center">
            Nested Components Practice
        </h4>
        <h4 className="title">Scholar Solution</h4>
        <div className="p-3 border rounded">
            <MyNestedComponents/>
        </div>
        <h4 className="title mt-3">Master Solution</h4>
        <div className="p-3 border rounded">
            <MasterNestedComponents/>
        </div>
    </div>
);

export default NestedComponents;
