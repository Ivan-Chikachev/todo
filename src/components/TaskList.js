import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = (props) => {
  const { todoData, filterMap, filterName } = props;
  return (
    <ul className="todo-list">
      {todoData
        .filter(filterMap[filterName])
        .map((task) => (
          <Task
            {...task}
            key={task.id}
            {...props}
          />
        ))}
    </ul>
  );
};
TaskList.defaultProps = {
  filterMap: () => {
  },
};

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  filterMap: PropTypes.objectOf(PropTypes.func),
  filterName: PropTypes.string.isRequired
};

export default TaskList;
