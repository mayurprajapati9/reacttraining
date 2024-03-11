import React, { Component } from 'react';

class TodoAppwithLS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      newTask: '',
      editingTask: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      this.setState({
        tasks: updatedTasks,
        newTask: '',
      });
      this.updateLocalStorage(updatedTasks);
    }
  };

  editTask = (index) => {
    this.setState({ editingTask: index, newTask: this.state.tasks[index] });
  };

  saveTask = (index) => {
    const { tasks, newTask } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;

    this.setState({
      tasks: updatedTasks,
      editingTask: null,
      newTask: '',
    });

    this.updateLocalStorage(updatedTasks);
  };

  removeTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });

    this.updateLocalStorage(updatedTasks);
  };

  render() {
    const { tasks, newTask, editingTask } = this.state;

    return (
      <><center>
      <h1>TODO App</h1>
    
      <div>
        <input
          type="text"
          value={newTask}
          onChange={this.handleInputChange}
          className='border-2 border-black p-1 rounded ml-2'
        />
        <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-1' onClick={this.addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingTask === index ? (
              <div>
                <input className='border-2 border-black p-1 rounded ml-2' type="text" value={newTask} onChange={this.handleInputChange} />
                <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-1' onClick={() => this.saveTask(index)}>Save</button>
              </div>
            ) : (
              <div>
                <span className='border-b-2 border-black mr-10'>{index +1} : {task}</span>
                <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-1' onClick={() => this.editTask(index)}>Edit</button>
                <button className='p-2 bg-slate-200 px-10 rounded font-semibold m-1' onClick={() => this.removeTask(index)}>Remove</button>
              </div>
            )}
          </li>
        ))}
      </ul>
   </center> </>
    );
  }
}

export default TodoAppwithLS;
