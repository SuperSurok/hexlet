import React from "react";
import MyCard from "./practice/MyFunctionalComponents";
import MasterCard from "./practice/MasterFunctionalComponents";
import TheoryMyFunctionalComponents from "./theory/TheoryMyFunctionalComponents";

class FunctionalComponents extends React.Component {
    render() {
        return (
            <div className="container border rounded mt-3 p-3">
                <h3 className="title row justify-content-center">
                    Nested Components Lesson
                </h3>
                <h4 className="title">Nested Components Theory</h4>
                <TheoryMyFunctionalComponents>
                    <TheoryMyFunctionalComponents.Body>
                        <TheoryMyFunctionalComponents.Title>
                            What is love?
                        </TheoryMyFunctionalComponents.Title>
                    </TheoryMyFunctionalComponents.Body>
                </TheoryMyFunctionalComponents>
                <h4 className="title row justify-content-center">
                    Nested Components Practice
                </h4>
                <h4 className="title">Scholar Solution</h4>
                <div className="p-3 border rounded">
                    <MyCard>
                        <MyCard.Body>
                            <MyCard.Title>Title</MyCard.Title>
                            <MyCard.Text>Text</MyCard.Text>
                        </MyCard.Body>
                    </MyCard>
                </div>
                <h4 className="title mt-3">Master Solution</h4>
                <div className="p-3 border rounded">
                    <MasterCard>
                        <MasterCard.Body>
                            <MasterCard.Title>Title</MasterCard.Title>
                            <MasterCard.Text>Text</MasterCard.Text>
                        </MasterCard.Body>
                    </MasterCard>
                </div>
            </div>
        );
    }
}

export default FunctionalComponents;
