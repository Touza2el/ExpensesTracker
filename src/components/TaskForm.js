import React, { useState, useContext, useEffect } from 'react';
import { TasksListContext } from '../contexts/TasksList';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask, clearList, editItem, editTask } = useContext(
    TasksListContext
  );
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(editItem.id, title);
    }
  };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);
  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        placeholder='add task'
        required
        onChange={handleChange}
      />
      <button type='submit'>{editItem ? 'Edit' : 'Add'}</button>
      <button type='submit' onClick={clearList}>
        clear
      </button>
    </form>
  );
};

export default TaskForm;
