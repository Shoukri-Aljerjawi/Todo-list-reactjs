import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className=' my=3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              
            </div>
            <h6 className="m-2">Task</h6>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='What do you need to do?'
              value={item}
              onChange={handleChange}
            ></input>
          </div>
          <button type='submit' className='btn float-right btn-primary mt-3'>
            Save Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
