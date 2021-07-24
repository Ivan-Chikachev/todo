import React, { useState } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import TodoContext from './TodoContext';

const App = () => {
    const initialState = [
        {
            id: 1,
            name: 'Completed task',
            done: false,
            status: 'completed',
            min: 10,
            sec: 10,
        },
        {
            id: 2,
            name: 'Editing task',
            done: true,
            status: 'editing',
            min: 11,
            sec: 0,
        },
        {
            id: 3,
            name: 'Active task',
            done: true,
            status: '',
            min: 5,
            sec: 0,
        },
    ];

    const [todoData, setTodoData] = useState(initialState);
    const [filterTasks, setFilterTasks] = useState('All');

    const createTask = (text, min, sec) => ({
        id: Date.now(),
        name: text,
        done: true,
        status: '',
        min,
        sec,
    });

    const addTask = (text, min, sec) => {
        text = text.trim();
        if (text === '') return;
        if (min === '') min = 10;
        if (sec === '') sec = 0;
        const item = createTask(text, min, sec);
        const newData = [...todoData, item];
        setTodoData(newData);
    };

    const deleteTask = (id) => {
        const newData = todoData.filter((i) => i.id !== id);
        setTodoData(newData);
    };

    const clearCompletedTasks = () => {
        const newData = todoData.filter((i) => i.done === true);
        setTodoData(newData);
    };

    const setFilter = (name) => setFilterTasks(name);

    const onTaskClick = (id) => {
        const newData = todoData.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                };
            }
            return task;
        });

        setTodoData(newData);
    };

    const FILTER_MAP = {
        All: () => true,
        Active: (task) => task.done,
        Completed: (task) => !task.done,
    };

    const FILTER_NAMES = Object.keys(FILTER_MAP);
    const countItems = todoData.filter((i) => i.done === false).length;

    return (
        <TodoContext.Provider value={{
            addTask,
            deleteTask,
            filterList: FILTER_NAMES,
            setFilter,
            isPressed: setFilterTasks,
            onTaskClick,
            todoData,
            filterMap: FILTER_MAP,
            filterName: filterTasks,
            countItems,
            clearCompletedTasks,
        }}
        >
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <TaskList />
                    <Footer />
                </section>
            </section>
        </TodoContext.Provider>
    );
};

export default App;
