import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = (props) => {

    const date = formatDistanceToNow(Date.now(),
        {includeSeconds: true, addSuffix: true})

    const {done, id, name, deleteTask, onTaskClick} = props
    let classNameLabel = 'completed'
    if (done) classNameLabel = ''

    return (
        <li className={classNameLabel}>
            <div className="view">
                <input
                    id={id}
                    className="toggle" type="checkbox"
                    defaultChecked={!done}
                    onChange={() => onTaskClick(id)}
                />
                <label htmlFor={id}>
                    <span className="description">{name}</span>
                    <span className="created">{date}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button
                    onClick={() => deleteTask(id)}
                    className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit"/>
        </li>
    );
}
Task.defaultProps = {
    deleteTask: () => {},
    onTaskClick: () => {}
}

export default Task;
