import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ done, id, name, deleteTask, onTaskClick }) => {
    const date = formatDistanceToNow(Date.now(),
    { includeSeconds: true, addSuffix: true });

    let classNameLabel = 'completed';
    if (done) classNameLabel = '';

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
            <span className="description">{name}</span>
            <span className="created">{date}</span>
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
    deleteTask: () => {},
    onTaskClick: () => {}
};

Task.propTypes = {
    done: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deleteTask: PropTypes.func,
    onTaskClick: PropTypes.func
};

export default Task;
