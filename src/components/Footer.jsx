import React from 'react';
import TasksFilter from "./TasksFilter";

const Footer = (props) => {
    const {countItems, clearTasks, filterList, isPressed, setFilter} = props
    return (
        <footer className="footer">
            <span className="todo-count">{countItems} items left</span>
            <TasksFilter
                filterList={filterList}
                setFilter={setFilter}
                isPressed={isPressed}
            />
            <button
                onClick={clearTasks}
                className="clear-completed">Clear completed
            </button>
        </footer>
    );
}

Footer.defaultProps = {
    clearTasks: () => {},
    setFilter: () => {},
}

export default Footer;
