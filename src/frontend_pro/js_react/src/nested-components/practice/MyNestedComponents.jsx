import {uniqueId} from "lodash";
import React from "react";
import MyItem from "./MyItem.jsx";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            list: [],
        };
    }

    addNote = (event) => {
        event.preventDefault();
        const {list, task} = this.state;
        if (task === "") return;
        this.setState({
            list: [task, ...list],
            task: "",
        });
    };

    handleChange = (event) => {
        this.setState({
            task: event.target.value,
        });
    };

    onRemove = (itemId) => (event) => {
        event.preventDefault();
        const {list} = this.state;
        const newArr = list.filter((item, id) => id !== itemId);
        this.setState({
            list: newArr,
        });
    };

    render() {
        const {task, list} = this.state;
        const notes = list.map((item, i) => (
            <MyItem key={uniqueId(i)} id={i} task={item} onRemove={this.onRemove}/>
        ));

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form form-inline mx-3" onSubmit={this.addNote}>
                        <div className="form-group">
                            <input
                                type="text"
                                value={task}
                                required={true}
                                className="form-control mr-3"
                                placeholder="I am going..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            add
                        </button>
                    </form>
                </div>
                {notes}
            </div>
        );
    }
}

export default TodoBox;
