import React, { Component } from 'react';
import Task from '../Task/Task';
import './TodoList.css';

export default class TodoList extends Component {
  handleAddingNewItem = () => {
    this.props.onNewItemAdded({ text: this.props.newItemText });
  };

  handleNewItemTextChange = evt => {
    this.props.onNewItemTextChange(evt.target.value);
  };

  render() {
    return (
      <div className="todo-list">
        <h2>List of tasks</h2>
        <ul className="todo-list__items">
          {this.props.tasks.map(task => (
            <Task {...task} key={task.id} onToggle={this.props.onToggle} />
          ))}
          <input
            type="text"
            value={this.props.newItemText}
            onChange={this.handleNewItemTextChange}
          />
          <button onClick={this.handleAddingNewItem}>Add new item</button>
        </ul>
      </div>
    );
  }
}
