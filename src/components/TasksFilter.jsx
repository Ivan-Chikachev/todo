import React from 'react';

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

export default TasksFilter;
