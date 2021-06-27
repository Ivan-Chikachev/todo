import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = (props) => {
    const {filterList, setFilter, isPressed} = props
    return (
        <ul className="filters">
            {filterList.map(i =>
                <li key={i}>
                    <button
                        onClick={() => setFilter(i)}
                        className={isPressed === i ? 'selected' : ''}>
                        {i}
                    </button>
                </li>
            )}
        </ul>
    );
}

TasksFilter.defaultProps = {
    setFilter: () => {}
}

TasksFilter.propTypes = {
    filterList: PropTypes.arrayOf(PropTypes.string),
    setFilter: PropTypes.func,
    isPressed: PropTypes.string
}

export default TasksFilter;
