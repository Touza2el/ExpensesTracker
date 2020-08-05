import React, { useContext } from 'react';
import { TasksListContext } from '../contexts/TasksList';
import Task from './Task';

const TasksList = () => {
  const { tasks } = useContext(TasksListContext);

  return tasks.length ? (
    <ul className='tasks-list'>
      {tasks.map((task) => {
        return <Task key={task.id} id={task.id} title={task.title} />;
      })}
    </ul>
  ) : (
    <li className='no-tasks'>No Tasks To Do</li>
  );
};

export default TasksList;
