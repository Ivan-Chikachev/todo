import React, {Component} from 'react';
import './App.css';
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";

export default class App extends Component {
    state = {
        todoData: [
            {id: 1, name: 'Completed task', status: 'completed'},
            {id: 2, name: 'Editing task', status: 'editing'},
            {id: 3, name: 'Active task', status: ''},
        ]
    }
    maxId = 100

    deleteTask = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(i => i.id !== id)
            }
        })
    }

    addTask = (text) => {
        this.setState(({todoData}) => {
            const item = {id: this.maxId++, name: text, status: ''}
            return {
                todoData: [...todoData, item]
            }
        })

    }

    render() {
        const state = this.state

        return (
            <section className='todoapp'>
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className="main">
                    <TaskList
                        addTask={this.addTask}
                        deleteTask={this.deleteTask}
                        state={state}/>
                    <Footer/>
                </section>
            </section>
        );
    }
}
