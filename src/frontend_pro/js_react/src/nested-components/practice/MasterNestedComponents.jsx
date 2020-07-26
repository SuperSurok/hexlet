import {uniqueId} from 'lodash';
import React from 'react';
import MasterItem from './MasterItem.jsx';

// BEGIN
export default class MasterTodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newTaskText: '', tasks: []};
    }

    handleChangeTask = ({target: {value}}) => {
        this.setState({newTaskText: value});
    }

    handleRemoveTask = (removingId) => (e) => {
        e.preventDefault();
        const {tasks} = this.state;
        this.setState({tasks: tasks.filter(({id}) => id !== removingId)});
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        const {tasks, newTaskText} = this.state;
        const newTask = {id: uniqueId(), text: newTaskText};
        this.setState({newTaskText: '', tasks: [newTask, ...tasks]});
    }

    renderForm() {
        const {newTaskText} = this.state;
        return (
            <form onSubmit={this.handleSubmitForm} className="todo-form form-inline mx-3">
                <div className="form-group">
                    <input
                        type="text"
                        onChange={this.handleChangeTask}
                        value={newTaskText}
                        required
                        className="form-control mr-3"
                        placeholder="I am going..."
                    />
                </div>
                <button type="submit" className="btn btn-primary">add</button>
            </form>
        );
    }

    render() {
        const {tasks} = this.state;
        return (
            <div>
                <div className="mb-3">
                    {this.renderForm()}
                </div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <MasterItem task={task} onRemove={this.handleRemoveTask(task.id)}/>
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }
}