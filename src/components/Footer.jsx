import React from 'react';
import TasksFilter from "./TasksFilter";
import PropTypes from 'prop-types';

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

Footer.propTypes = {
    countItems: PropTypes.number.isRequired,
    clearTasks: PropTypes.func,
    filterList: PropTypes.arrayOf(PropTypes.string),
    isPressed: PropTypes.string.isRequired,
    setFilter: PropTypes.func
}

Footer.defaultProps = {
    clearTasks: () => {},
    setFilter: () => {},
}

export default Footer;
