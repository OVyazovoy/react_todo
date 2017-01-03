import React, {Component} from 'react';
import './App.css';
import {TaskForm} from './forms/TaskForm';
import {TaskList} from './list/TaskList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    '_id':1,
                    'checked': false,
                    'title': 'test',
                    'ready': false
                },
                {
                    '_id':1,
                    'checked': false,
                    'title': 'test1',
                    'ready': false
                },
            ]
        };
    }

    AddTask(title) {
        let task = {
            title: title,
            checked: false,
            ready: false,
        };
        this.setState({tasks: this.state.tasks.concat([task])});
        this.render()
    }

    changeTask(task, key) {
        let newTasks = this.state.tasks;
        newTasks[key] = task;
        this.setState(newTasks);
    }
    changeTasks(tasks){
        this.setState(tasks);
    }

    render() {
        return (
            <div className="App">
                <TaskForm
                    AddTask={this.AddTask.bind(this)}
                />
                <TaskList
                    tasks={this.state.tasks}
                    changeTask={this.changeTask.bind(this)}
                    changeTasks={this.changeTasks.bind(this)}
                />
            </div>
        );
    }
}

export default App;
