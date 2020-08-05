import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.scss';
import TasksList from './components/TasksList';
import TasksListContextProvider from './contexts/TasksList';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <TasksListContextProvider>
          <div className='tasks-list-container'>
            <h2>tasks manager</h2>
            <TaskForm />
            <TasksList />
          </div>
        </TasksListContextProvider>
      </div>
    );
  }
}

export default App;
