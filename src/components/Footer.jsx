import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

const Footer = ({
                    countItems, clearCompletedTasks, filterList, isPressed, setFilter,
                }) => (
    <footer className="footer">
    <span className="todo-count">
      {countItems}
        {' '}
        items left
    </span>
        <TasksFilter
            filterList={filterList}
            setFilter={setFilter}
            isPressed={isPressed}
        />
        <button
            onClick={clearCompletedTasks}
            className="clear-completed"
        >
            Clear completed
        </button>
    </footer>
);

Footer.defaultProps = {
    clearCompletedTasks: () => {
    },
    setFilter: () => {
    },
};

Footer.propTypes = {
    countItems: PropTypes.number.isRequired,
    clearCompletedTasks: PropTypes.func,
    filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPressed: PropTypes.string.isRequired,
    setFilter: PropTypes.func,
};

export default Footer;
