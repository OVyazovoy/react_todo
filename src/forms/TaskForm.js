/**
 * Created by vazovojoleg on 11/27/16.
 */
import React, {Component} from 'react';
import './email.css';

export class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({task: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.task !== '') {
            this.props.AddTask(this.state.task);
            this.setState({error: ''})
        } else {
            this.setState({error: 'error'})
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span className="mainTitle">Add Task:</span>
                    <input
                        className={this.state.error}
                        type="text"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}