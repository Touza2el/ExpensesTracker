import React, { useContext } from 'react';
import { TasksListContext } from '../contexts/TasksList';

function Task(props) {
  const { removeTask, findItem } = useContext(TasksListContext);
  const { id, title } = props;
  return (
    <li className='task'>
      <span className='title'>{title}</span>
      <button className='delete-btn' onClick={() => removeTask(id)}>
        <i className='fas fa-trash-alt'></i>
      </button>
      <button className='edit-btn' onClick={() => findItem(id)}>
        <i className='fas fa-edit'></i>
      </button>
    </li>
  );
}

export default Task;
