/**
 * Created by vazovojoleg on 11/27/16.
 */
import React, { Component } from 'react';
import classNames from 'classnames/bind';

export class TaskRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            task:this.props.task,
            edit: false,
            cacheTask: this.props.task
        }
    }
    updateTask(task = this.state.task){
        this.props.changeTask(task, this.props.id);
    }
    changeTask(){
        this.updateTask();
        this.toogelEdit();
    }

    noSave(){
        this.setState({task: this.state.cacheTask});
        this.toogelEdit();
    }
    toogelEdit(){
        this.setState({edit: !this.state.edit})
    }
    changeTaskCheck(){
        let task = this.state.task;
        task.checked = !this.state.task.checked;
        this.setState({task: task});
        this.updateTask();
    }
    changeTaskName(e){
        let task = this.state.task;
        task.checked = false;
        task.title = e.target.value;
        this.setState({task: task});
    }
    changeTaskReady(){
        let task = this.state.task;
        task.ready = true;
        this.setState({task: task});
        this.updateTask();
    }
    render() {
        const task = this.state.task;
        const readyClass = classNames({
            hide: this.state.edit || task.ready
        });
        const spanClass = classNames({
            hide: this.state.edit,
            ready: task.ready,
            'not-ready': !task.ready
        });
        return (
            <li>
                <input type="checkbox"
                       checked={task.checked}
                       onChange={this.changeTaskCheck.bind(this)}
                />
                <span className={spanClass}>{task.title}</span>
                <input type="text"
                       className={!this.state.edit&&'hide'}
                       value={task.title}
                       onChange={this.changeTaskName.bind(this)}
                />
                <input type="button"
                       className={!this.state.edit&&'hide'}
                       value="save"
                       onClick={this.changeTask.bind(this)}
                />
                <input type="button"
                       className={this.state.edit&&'hide'}
                       value='edit'
                       onClick={this.toogelEdit.bind(this)}
                       disabled={task.ready}
                />
                <input type="button"
                       className={!this.state.edit&&'hide'}
                       value='no save'
                       onClick={this.noSave.bind(this)}
                />
                <input type="button"
                       className={readyClass}
                       value='ready'
                       onClick={this.changeTaskReady.bind(this)}
                />
            </li>
        )
    }
}