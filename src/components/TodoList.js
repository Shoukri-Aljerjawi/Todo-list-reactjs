import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul className='list-group '>
          <h3 className='text-capitalize '>to do:</h3>

          {items.map((item) => {
            return <TodoItem key={item.id} title={item.title} />;
          })}
         
        </ul>
      </div>
    );
  }
}

export default TodoList;
