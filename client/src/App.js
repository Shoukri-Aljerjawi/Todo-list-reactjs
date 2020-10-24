import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    items: [],
    item: '',
  };

  
  componentDidMount() {
    axios.get('/todos').then((res) => this.setState({ items: res.data }));
  }
  componentDidUpdate() {
    axios.get('/todos').then((res) => this.setState({ items: res.data }));
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.item) {
      alert('The input should be not empty');
    } else {
      axios.post('/todos', { title: this.state.item }).then((res) => {});
      this.setState({
        item: '',
      });
    }
  };
  handleDelete = (id) => {
    axios.delete(`/todos/${id}`).then(() => console.log('done'));
  };

  handleCompleted = (id) => {
    axios.put(`/todos/${id}`).then(() => console.log('done'));
  };
  render() {
    return (
      <div className='container d-flex justify-content-center w-50 '>
        <div className='row card card-body  mt-5 '>
          <TodoList
            items={this.state.items}
            handleDelete={this.handleDelete}
            handleCompleted={this.handleCompleted}
          />
          <div className='float-right mt-3 '>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleDelete={this.handleDelete}
              handleCompleted={this.handleCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
