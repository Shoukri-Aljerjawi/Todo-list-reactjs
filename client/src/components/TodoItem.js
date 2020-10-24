import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleCompleted, status } = this.props;
    let idName = status ? 'completed' : '';
    return (
      <div >
        <li  id ={idName} className='list-group-item text-capitalize d-flex justify-content-between '>
          <h6>{title}</h6>
          <div className='todo-icon'>
            <span role="button" className='mx-1 text-success' onClick={handleCompleted}>
              <i className='fas fa-check'></i>
            </span>
            <span role="button" className='mx-1 text-danger'  onClick={handleDelete}>
              <i className='fas fa-times'></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
