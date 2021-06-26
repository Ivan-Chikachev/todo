import React from 'react';
import Task from "./Task";

const TaskList = (props) => {
    const {todoData, filterMap, filterName} = props
    return (
        <ul className="todo-list">
            {todoData
                .filter(filterMap[filterName])
                .map(task =>
                    <Task {...task} key={task.id}
                          {...props}
                    />
                )}
        </ul>
    );
}
TaskList.defaultProps = {
    filterMap: () => {},
}

export default TaskList;
