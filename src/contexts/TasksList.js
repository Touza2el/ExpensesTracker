import React, { createContext, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
export const TasksListContext = createContext();

const TasksListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [
    { id: uuid(), title: 'Design  Template' },
    { id: uuid(), title: 'Start Coding' },
    { id: uuid(), title: 'Creating Ads' },
  ];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([{ id: uuid(), title: title }, ...tasks]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const clearList = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };
  const editTask = (id, title) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id: id, title: title } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  return (
    <TasksListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TasksListContext.Provider>
  );
};

export default TasksListContextProvider;
