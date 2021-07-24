import React, { useContext } from 'react';
import Task from './Task';
import TodoContext from '../TodoContext';

const TaskList = () => {
    const { todoData, filterMap, filterName } = useContext(TodoContext);

    return (
        <ul className="todo-list">
            {todoData
                .filter(filterMap[filterName])
                .map((task) => (
                    <Task
                        {...task}
                        key={task.id}
                    />
                ))}
        </ul>
    );
};

export default TaskList;
