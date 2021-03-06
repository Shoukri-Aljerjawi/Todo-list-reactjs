import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
 
  render() {
    const { items, handleDelete, handleCompleted } = this.props;
    return (
      <div>
        <ul className='list-group '>
          <h3 className='text-capitalize '>to do:</h3>

          {items.map((item) => {
            return (
              <TodoItem
                key={item._id}
                status={item.complete}
                title={item.title}
                handleDelete={() => handleDelete(item._id)}
                handleCompleted={() => handleCompleted(item._id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
