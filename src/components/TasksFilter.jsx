import React, { useContext } from 'react';
import TodoContext from '../TodoContext';

const TasksFilter = () => {
    const { filterList, setFilter, isPressed } = useContext(TodoContext);
    return (
        <ul className="filters">
            {filterList.map((i) => (
                <li key={i}>
                    <button
                        onClick={() => setFilter(i)}
                        className={isPressed === i ? 'selected' : ''}
                    >
                        {i}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TasksFilter;
