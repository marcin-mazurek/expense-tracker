import React, { Component } from 'react';
import cx from 'classnames';
import './Task.css';

export default class Task extends Component {
  handleToggle = () => {
    this.props.onToggle(this.props.id);
  };

  render() {
    const { text, done } = this.props;

    return (
      <li className={cx('task', { 'task--done': done })}>
        <label>
          <input
            type="checkbox"
            onChange={this.handleToggle}
            checked={done}
            className="task__checkbox"
          />
          {text}
        </label>
      </li>
    );
  }
}
