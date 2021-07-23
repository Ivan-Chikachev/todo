import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import TaskDescription from './TaskDescription';

const Task = ({
                  done, id, name, min, sec, deleteTask, onTaskClick,
              }) => {
    const date = formatDistanceToNow(Date.now(),
        { includeSeconds: true, addSuffix: true });

    let classNameLabel = 'completed';
    if (done) classNameLabel = '';
    const formatToSec = (min, sec) => min * 60 + Number(sec);

    return (
        <li className={classNameLabel}>
            <div className="view">
                <input
                    id={id}
                    className="toggle"
                    type="checkbox"
                    defaultChecked={!done}
                    onChange={() => onTaskClick(id)}
                />
                <label htmlFor={id}>
                    <span className="title">{name}</span>
                    <TaskDescription totalSec={formatToSec(min, sec)} />
                    <span className="description">{date}</span>
                </label>
                <button className="icon icon-edit" />
                <button
                    onClick={() => deleteTask(id)}
                    className="icon icon-destroy"
                />
            </div>
            <input type="text" className="edit" />
        </li>
    );
};
Task.defaultProps = {
    deleteTask: () => {
    },
    onTaskClick: () => {
    },
};

Task.propTypes = {
    done: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deleteTask: PropTypes.func,
    onTaskClick: PropTypes.func,
    min: PropTypes.number.isRequired,
    sec: PropTypes.number.isRequired,
};

export default Task;
