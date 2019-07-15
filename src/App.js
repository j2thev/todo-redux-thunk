import React, { Component } from 'react';

import AddTodo from './containers/AddTodo.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
      </div>
    );
  }
}

export default App;
