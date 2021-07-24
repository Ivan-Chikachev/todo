import React, { useContext } from 'react';
import TasksFilter from './TasksFilter';
import TodoContext from '../TodoContext';

const Footer = () => {
    const { countItems, clearCompletedTasks } = useContext(TodoContext);
    return (
        <footer className="footer">
            <span className="todo-count">
                {countItems}
                {' '}
                items left
            </span>
            <TasksFilter />
            <button
                onClick={clearCompletedTasks}
                className="clear-completed"
            >
                Clear completed
            </button>
        </footer>
    );
};

export default Footer;
