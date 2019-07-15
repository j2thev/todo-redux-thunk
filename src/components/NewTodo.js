import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      userId: ''
    };
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, userId } = this.state;

    this.props.onAddTodo({
      title,
      userId,
      completed: false
    });

    this.setState({
      title: '',
      userId: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name='title' value={this.state.title} onChange={this.handleChange} required />
          </div>
          <div>
            <label htmlFor="userId">User ID: </label>
            <input type="text" name='userId' value={this.state.userId} onChange={this.handleChange} required />
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default NewTodo;