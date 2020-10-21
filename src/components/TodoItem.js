import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <li className='list-group-item text-capitalize d-flex justify-content-between '>
          <h6>{title}</h6>
          <div className='todo-icon'>
            <span className='mx-1 text-success'>
              <i class='fas fa-check'></i>
            </span>
            <span className='mx-1 text-danger'>
              <i class='fas fa-times'></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
