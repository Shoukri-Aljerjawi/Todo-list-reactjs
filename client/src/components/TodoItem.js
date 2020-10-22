import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleCompleted, status } = this.props;
    let className = status ? 'completed' : '';
    return (
      <div className={className}>
        <li className='list-group-item text-capitalize d-flex justify-content-between '>
          <h6>{title}</h6>
          <div className='todo-icon'>
            <span className='mx-1 text-success' onClick={handleCompleted}>
              <i className='fas fa-check'></i>
            </span>
            <span className='mx-1 text-danger' onClick={handleDelete}>
              <i className='fas fa-times'></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
