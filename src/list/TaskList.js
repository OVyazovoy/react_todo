/**
 * Created by vazovojoleg on 11/27/16.
 */
import React, { Component } from 'react';
import { TaskRow } from './TaskRow';

export class TaskList extends  Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: this.props.tasks,
            allChecked: false,
        }
    }
    setAllCheck(){
        let tasks = this.props.tasks,
            allChecked = this.state.allChecked;
        console.log(this.state.tasks);
        tasks.forEach((task,id) => {
            if(allChecked && task.ready && task.checked){
                task.checked = !allChecked
            }
            if(!task.ready){
                task.checked = !allChecked
            }
        });
        this.setState({
            allChecked: !this.state.allChecked
        });
        this.props.changeTasks(tasks)
    }
    setAllReady(){
        let tasks = this.props.tasks;
        tasks.forEach((task,id) => {
            console.log(task);
            if(task.checked && !task.ready){
                task.ready = true
            }
        });
        this.props.changeTasks(tasks)
    }
    render() {
        let rows = [];
        this.props.tasks.forEach((task, id) => {
            rows.push(
                <TaskRow
                    task={task} key={id} id={id}
                    changeTask={this.props.changeTask}
                />
            );
        });
        return (
            <div>
                <span>
                    <input type="checkbox"
                           id="allCheck"
                           onClick={this.setAllCheck.bind(this)}
                    />
                    <label htmlFor="allCheck">Set checked ready</label>
                    <input type="button"
                           value="Set all ready"
                           onClick={this.setAllReady.bind(this)}
                    />
                </span>
                <ul className="list">{rows}</ul>
            </div>
        );
    }
}