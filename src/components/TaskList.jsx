import React from 'react';
import Task from "./Task";

const TaskList = (props) => {
    const {todoData} = props.state
    const {deleteTask, addTask} = props
    return (
        <ul className="todo-list">
            {todoData.map(task =>
                <Task {...task} key={task.id}
                      deleteTask={deleteTask}
                      addTask={addTask}
                />
            )}
            <button onClick={() => addTask('hello')}>add</button>
        </ul>
    );
}

export default TaskList;
